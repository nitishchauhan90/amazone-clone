// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express= require('express')
const cors= require('cors');
const functions = require('firebase-functions');
const { request } = require("http");
const stripe = require ("stripe")('sk_test_51OXHo3SIuhtCKtX25EiHgErWj4tqjdwIlLLLsXY4ckeoxOPUbistlEEOKjg4JGJWYHd5gLgffTtv8nAfUor2kKXn00lTzYFFGy')


//app config
const app= express();
//middleware
app.use(cors({origin: true}))
app.use(express.json());
//api routes

app.get('/',(request,response)=> 
    response.status(200).send('hello world'));
//listen command

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;
    console.log('payment Request Received >>>',total)

    const paymentIntent =await stripe.paymentIntent.create({
        amount: total,
        currency:"usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

module.exports.api = functions.http.onRequest(app); 