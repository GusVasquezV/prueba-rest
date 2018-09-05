'use strict'

 const express = require('express')
 const ProductCtrl = require('../controllers/products')
 const userCtrl = require('../controllers/user')
 const auth = require('../middlewares/auth')
 const api = express.Router()

api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productId',ProductCtrl.getProduct)
api.post('/product',  ProductCtrl.saveProduct)
api.put('/product/:productId',  ProductCtrl.updateProduct)
api.delete('/product/:productId',  ProductCtrl.deleteProduct)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth, function(req, res){
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api