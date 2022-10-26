const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//เรียกใช้ Api
const {service, adduser} = require('./api/api');
app.get('/service', service);
app.post('/adduser', adduser);

app.listen(3000, () => {
    console.log('เชื่อมต่อแล้วจ้า!!!!!!');
})


