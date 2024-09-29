const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Iyzipay = require('iyzipay');
const { body, validationResult } = require('express-validator');
require('dotenv').config();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});

const app = express();
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set CORS origin dynamically based on the environment
const allowedOrigins = [
  process.env.BACKEND_API_URL_PRODUCTION, // Production URL
  process.env.BACKEND_API_URL_DEPLOYMENT, // Deployment URL (staging/preview)
  'http://localhost:3000', // Localhost for development
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true,
}));

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZIPAY_API_KEY,
  secretKey: process.env.IYZIPAY_SECRET_KEY,
  uri: 'https://sandbox-api.iyzipay.com'
});


app.post('/payment/create', [
  body('email').isEmail().withMessage('Invalid email format'),
  body('phone_number').isMobilePhone('any').withMessage('Invalid phone number'),
  body('price').isNumeric().withMessage('Price must be a number'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  const { email, phone_number, price } = req.body;

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789',
    price: price,
    paidPrice: price,
    currency: Iyzipay.CURRENCY.TRY,
    installment: 1,
    basketId: 'B67832',
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: `${process.env.BACKEND_API_URL_DEPLOYMENT}/payment/callback`, // Ensure this is correct
    buyer: {
      id: 'BY789',
      name: 'John',
      surname: 'Doe',
      gsmNumber: phone_number,
      email: email,
      identityNumber: '74300864791',
      lastLoginDate: '2015-10-05 12:43:35',
      registrationDate: '2013-04-21 15:12:09',
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      ip: '85.34.78.112',
      city: 'Istanbul',
      country: 'Turkey',
      zipCode: '34732'
    },
    shippingAddress: {
      contactName: 'Jane Doe',
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      zipCode: '34742'
    },
    billingAddress: {
      contactName: 'Jane Doe',
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      zipCode: '34742'
    },
    basketItems: [
      {
        id: 'BI101',
        name: 'Binocular',
        category1: 'Collectibles',
        category2: 'Accessories',
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: price
      }
    ]
  };

  // Call iyzipay to create a payment
  iyzipay.checkoutFormInitialize.create(request, (err, result) => {
    if (err) {
      console.error('Error creating payment:', err);
      return res.status(500).json({ error: 'Payment creation failed', details: err });
    }
    console.log('Payment creation result:', result);
    res.json(result);
  });
});

app.post('/payment/callback', (req, res) => {
    console.log('Payment callback received:', req.body);
    const { token } = req.body;
  
    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }
  
    const request = {
      locale: Iyzipay.LOCALE.TR,
      conversationId: '123456789',
      token: token,
    };
  
    // Call iyzipay to retrieve payment status
    iyzipay.checkoutForm.retrieve(request, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Payment verification failed', details: err });
      }
  
      // Directly access the result object without parsing
      console.log('Payment retrieve result:', result);
  
      if (result.status === 'success') {
        return res.redirect(`${process.env.BACKEND_API_URL_DEPLOYMENT}/payment-success?status=success`);
      } else {
        return res.redirect(`${process.env.BACKEND_API_URL_DEPLOYMENT}/payment-success?status=failed`);
      }
    });
  });
  

// Error handling for unsupported routes
app.use((req, res) => {
  res.status(405).json({ status: 'Invalid request method', method: req.method, path: req.path });
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});