const express = require('express');//modules
const app = express();

const data=[];
//app.use('/html', express.static('html'));
app.use(express.static('public'));


app.get('/', (req, res) => res.render('index.ejs'));//Homepage route
// or (req, res) => res.render('reservation.ejs')
app.get('/newMember',(req, res) => res.render('clients.ejs'));
// MAIN POST ROUTE
 app.post('/clients', (req, res)=>res.send('index.ejs'));
 
 //.......for form
 // console.log(req.body.firstN)
  //console.log(req.body.lastN)
   
  //let customer = req.body.firstN
  //let number = req.body.lastN
  //clientObj ={
    // "firstName": firstName,
    // "lastName": lastName,
    // "birthDate": dob,
    // "clientAddress":clientAddress,
    // "city":city,
    // "state":state,
    // "zip":zip,
    // "telephone":telephone,
    // "email":email,
    // "textarea":textarea

  




//orders.push(clientObj)
 
//res.redirect("/")
//req.body.name


//.......for database
//var database = {
 // "clients": ["Zephr Newman", ............] , 
 // "donations": ["Lareina Keller", ...............]
//}

//res.render("only_clients", {clients: database["clients"]})

//and

//res.render("only_donors", {donors: database["donations"])



 
app.listen(3000, function(){ console.log('Breast Is Best app listening on port 3000');})

 
//function bibMap() {
  //var btn = document.createElement("BUTTON");// Create a <button> element
 // btn.innerHTML = "CLICK ME";                   // Insert text
//  document.body.appendChild(btn);               // Append <button> to <body>

