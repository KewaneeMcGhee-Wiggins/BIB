const express = require('express');
const app = express();

app.get('/', (req, res) => res.render('index.ejs'));//Homepage route
// or (req, res) => res.render('reservation.ejs')
 // MAIN POST ROUTE
 

 app.listen(3000, function(){ console.log('Breast Is Best app listening on port 3000'); });

 
function bibMap() {
  var btn = document.createElement("BUTTON");// Create a <button> element
  btn.innerHTML = "CLICK ME";                   // Insert text
  document.body.appendChild(btn);               // Append <button> to <body>
}
