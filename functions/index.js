// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express= require('express');
const cors= require('cors');
const functions = require('firebase-functions');
const stripe = require ("stripe")(process.env.url);


//app config
const app= express();
//middleware
app.use(cors({origin: true}));
app.use(express.json());
//api routes

app.get('/',(request,response)=> response.status(200).send('hello world'));
//listen command

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;
    console.log('payment Request Received >>>',total);

    const paymentIntent =await stripe.paymentIntent.create({
        amount: total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});

exports.apo = functions.https.onRequest(app);