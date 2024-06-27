const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS middleware
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// POST endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jimmyvelasquez18@gmail.com', // Your email address
      pass: 'Beast#1234' // Your email password
    }
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'jimmyvelasquez18@gmail.com', // Your email address
    subject: subject,
    text: `Message from ${name} <${email}>:\n\n${message}`
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email' + error.message);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
