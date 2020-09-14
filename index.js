const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let usuario = {
    nombre: '',
    apellido: ''
}

let respuesta = {
    error: false,
    codigo: 200, 
    mensaje: ''
}
 

app.get('/' , function(req, res){
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
    }
    res.send(respuesta)
})

app.get('/usuario' , function(req, res){
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    }
    if(usuario.nombre = '' || usuario.apellido == ''){
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        }
    }
    else{
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Respuesta del usuario',
            respuesta : usuario
        }
    }
    res.send(respuesta)
})


app.post('/usuario' , function(req, res){
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    }
    if(!req.body.nombre || !req.body.apellido ){
        respuesta = {
            error: true,
            codigo: 502, 
            mensaje: 'Los campos nombre  y nombre son requeridos'
        }
    }
    else if(usuario.nombre != '' || usuario.apellido != '') {
        respuesta = {
            error: true,
            codigo: 503, 
            mensaje: 'El usuario ya fue creado previamente'
        }
           
    }
    else{
        usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido
        }
        respuesta = {
            error: false,
            codigo: 200, 
            mensaje: 'Usuario creado',
            respuesta: usuario
        }
    }
    res.send(respuesta)
})

app.put('/usuario' , function(req, res){
    if(!req.body.nombre || !usuario.apellido ){
        respuesta = {
            error: true,
            codigo: 502, 
            mensaje: 'El nombre y el apellido son campos requeridos'
        }
    }else if(usuario.nombre == '' , usuario.apellido == ''){
        respuesta = {
            error: true,
            codigo: 501, 
            mensaje: 'El usuario no ha sido creado'
        }
    }
    else{
        usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido
        }
        respuesta = {
            error: false,
            codigo: 200, 
            mensaje: 'Usuario acutalizado',
            respuesta: usuario
        }
    }
    res.send(respuesta)
})

app.delete('/usuario' , function(req , res){
    if(usuario.nombre == "" || usuario.apellido == ''){
        respuesta = {
            error: true,
            codigo: 501, 
            mensaje: 'Usuario no ha sido creado'
        }
    }
    else{
        usuario = {
            nombre: '',
            apellido: ''
        }

        respuesta = {
            error: false,
            codigo: 200, 
            mensaje: 'Usuario eliminado',
            usuario : usuario
        }
    }
    res.send(respuesta)
})

app.use(function(req, res, next){
    respuesta = {
        error: true,
        codigo: 404, 
        mensaje: 'URL no encontrada'
    }
    res.status(404).send(respuesta)
})

app.post('/hola' , function(req, res){
    res.send('[POST] Saludos desde express')
})


app.listen(3000, ()=>{
    console.log("El servidor esta inicializando en el puerto 3000")
})