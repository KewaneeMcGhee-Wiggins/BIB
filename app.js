const express = require('express');//modules
const app = express();
const bodyParser = require('body-parser');

let ClientRectList =[];
const data=[];
//app.use('/html', express.static('html'));
app.use("/", express.static('public'));//route /
app.use(bodyParser.urlencoded({
  extended:true
}));
app.set('view engine', 'ejs');


app.get('/', (req, res) =>{ res.render('index.ejs')});//Homepage route
// or (req, res) => res.render('reservation.ejs')

app.get('/newMember',(req, res) =>{ 
  res.render('clients.ejs')
});

app.get('/about', (req, res) => {
  res.render('about.ejs')
});

app.get('/clients', (req, res) => {
  res.render('clients.ejs')
});

app.get('/donators', (req, res) => {
  res.render('donators.ejs')
});

app.get('/clientReviews', (req, res) => {
  res.render('clientReviews.ejs')
});

app.get('/map', (req, res) => {
  res.render('map.ejs')
});

app.get('/faQs', (req, res) => {
  res.render('faQs.ejs')
});


// MAIN POST ROUTE
 //app.post('/clients', (req, res)=>res.send('index.ejs'));
 app.post('/clients',(req, res)=>
 {
   ClientRectList.push(req.body);
   console.log(ClientRectList);
  // console.log(req.body);
  //  console.log(req.body.lastName);
   res.redirect('/');
 });
 
 //.......for form
 // console.log(req.body.firstN)
 // console.log(req.body.lastN)
   
 // let customer = req.body.firstN
  //let number = req.body.lastN
 // clientObj ={
   //  "firstName": firstName,
    // "lastName": lastName,
    // "birthDate": dob,
    // "clientAddress":clientAddress,
  //    "city":city,
  //    "state":state,
  //    "zip":zip,
  //   "telephone":telephone,
  //    "email":email,
  //    "textarea":textarea
  // }
  




//orders.push(clientObj),
 
//res.redirect("/index.ejs"),
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
 // var btn = document.createElement("BUTTON");// Create a <button> element
 // btn.innerHTML = "CLICK ME";                   // Insert text
 // document.body.appendChild(btn);               // Append <button> to <body>

