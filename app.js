const express = require('express');

const app = express();

const port = 5000;
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});

app.use(express.static(__dirname +'/index'))
function logger(req,res,next){
    console.table({method: req.method, path: req.url})
    const date=new Date()
   if(date.getDay()===0||date.getDay()===6||date.getHours()<9||date.getHours()>17) {
       res.sendFile(__dirname+'/index/Closed.html')
   } else
    next()
}
app.use(logger)

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index/Home.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/index/Contact.html');
});
app.get('/service', (req, res) => {
    res.sendFile(__dirname + '/index/server.html');
});
