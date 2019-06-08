const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to my app'));//Homepage route
// or (req, res) => res.render('reservation.ejs')
 // MAIN POST ROUTE

 app.listen(3000, function(){ console.log('Breast Is Best app listening on port 3000'); });