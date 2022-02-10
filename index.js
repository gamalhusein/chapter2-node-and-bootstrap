//pemanggilan package express (versi ES5)>versi ES6 import express from 'express'
const express = require('express')

//menggunakan package express
const app = express()

//mengkondisikan jika sudah login
const isLogin = true
app.get('/blog', function(request, response){
    response.render('blog', {isLogin: isLogin})
})

//set engine template -> sebelum menampilkan file hbs menggunakan code di bawah ini
app.set('view engine', 'hbs')

//untuk megakses seluruh direktori file yang dipunya jika hanya menggunakan '/' kalau mau spesifik ke '/namafile'
app.use('/public', express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended : false})) // <- untuk mengakses form yang dimasukkan user


//untuk memproses form yang dimasukkan oleh user
app.post('/blog', function (request, response){
    let title = request.body.title
    let content = request.body.content

    console.log(`data title : ${title}`);
    console.log(`data title : ${content}`);

})
//set endpoint
app.get('/', function (request, response){
    response.send("hello world")
})
//untuk menampilkan menu index.hbs
app.get('/home', function(request, response){
    response.render('index')
})

//untuk menampilkan menu blog.hbs
app.get('/blog', function(request, response){
    response.render('blog')
})

//untuk menampilkan menu contact.hbs
app.get('/contact-me', function(request, response){
    response.render('contact')
})
//untuk menampilkan menu contact.hbs
app.get('/add-blog', function(request, response){
    response.render('form-blog')
})
//menampilkan data blog detail sesuai dengan judul nya atau dengan id yang dibuat
app.get('/blog/:id', function (request, response){
    let id = request.params.id

    console.log(`Id dari client : ${id}`)

    response.render('blog-detail', {id : id})
})

//konfigurasi port aplikasi
const port = 5000
app.listen(port, function(){
    console.log(`Server is Running on Port ${port}`);
})