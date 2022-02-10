//pemanggilan package express (versi ES5)>versi ES6 import express from 'express'
const express = require('express')

//menggunakan package express
const app = express()

//set endpoint
app.get('/', function (request, response){
    response.send("hello world")
})

//konfigurasi port aplikasi
const port = 5000
app.listen(port, function(){
    console.log(`Server is Running on Port ${port}`);
})