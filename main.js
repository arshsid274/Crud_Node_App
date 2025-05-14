// // imports
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session'); // fixed typo

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Database Connection
// // mongoose.connect(process.env.DB_URI, );
// // const db = mongoose.connection;
// // db.on("error", (error) => console.log(error));
// // db.once('open',() =>console.log("Connected to Database"));

// mongoose.connect(process.env.DB_URI)
//   .then(() => {
//     console.log('✅ Connected to Database');
//   })
//   .catch((error) => {
//     console.error('❌ Database connection error:', error);
//   });



// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(session({
//     secret: 'my secret key ',
//     resave: false,
//     saveUninitialized: true,
    
// }));

// // set template engine 
// app.set('view engine', 'ejs');

// //rote prefix
// app.use("", require('./routes/routes'));

// app.use((req, res,next)=>{
//   res.locals.messgae = req.session.message;
//   delete req.session.message;
//   next();
// })



// app.listen(PORT, () => {
//     console.log(`Server Started at http://localhost:${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

