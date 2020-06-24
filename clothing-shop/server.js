const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'poduction') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express(); //* Create an instance of the express application
const port = process.env.PORT ||  5000; //* Port to use?USe an availableport in the process env or use port 500. For heroku app, the post is set for use.

//? Anny request, should be converted to JSON
app.use(bodyParser.json());
//! Remeber javscript URL encoding? this is the same
app.use(bodyParser.urlencoded({extended:true }));

app.use(cors());

if(process.env.NODE_ENV == 'production') {
    //* IF the env is production the static contect is in the build folder
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (res,req) => {
        res.semdFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

//The server should listen to that port
app.listen(port, error => {
    if (error) throw error;
    console.log('Everything runnning on port: ' , port);
});

//Check out IntroToJs repo

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    //? Stripe API call 
    stripe.charges.create(body, async (stripeError, StripeResponse) => {
        if(stripeError)
            res.status(500).send({error: stripeError});
        else 
            res.status(200).send({succes: StripeResponse});
            
    });
})
