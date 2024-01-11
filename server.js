const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT;

//connecting to Database
const connectDb = require('./database/db.js');
connectDb();

//middleware
app.use(bodyParser.json());
app.use(cors());

//static files for deployment
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname),'./client/build/index.html');
})

//Routes
app.use('https://fine-gray-hippopotamus-shoe.cyclic.app/api/files',require('./routes/routes.js'));
app.use('https://fine-gray-hippopotamus-shoe.cyclic.app/files',require('./routes/show.js'));
app.use('https://fine-gray-hippopotamus-shoe.cyclic.app/files/download',require('./routes/download.js'));

app.listen(PORT,()=>{
    console.log(`Server is listening at PORT: ${PORT}`);
})



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const dotenv = require("dotenv");
// dotenv.config();

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');

// const PORT = process.env.PORT || 8000;

// //connecting to Database
// const connectDB = async ()=>{
//     const MONGODB_URI = 'mongodb+srv://AmanPathan:Pathan123@cluster0.tdmuvd3.mongodb.net/?retryWrites=true&w=majority';
//     try {
//         const conn = await mongoose.connect(MONGODB_URI);
//         console.log('Database Connected Successfully!');
//     } catch (error) {
//         console.log('Error while connecting with the Database',error.message);
//         process.exit(1);
//     }
// }
// // const connectDb = require('./database/db.js');
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("Server is Listening at port 8000");
//     })
// })

// //middleware
// app.use(bodyParser.json());
// app.use(cors());

// //static files for deployment
// app.use(express.static(path.join(__dirname,'./client/build')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname),'./client/build/index.html');
// })

// //Routes
// app.use('/api/files',require('./routes/routes.js'));
// app.use('/files',require('./routes/show.js'));
// app.use('/files/download',require('./routes/download.js'));

// // app.listen(PORT,()=>{
// //     console.log(`Server is listening at PORT: ${PORT}`);
// // })
