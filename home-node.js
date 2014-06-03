var htutil = require('./htutil'); 
exports.get = function(req, res) { 
  res.writeHead(200, { 	
    'Content-Type': 'text/html' 
  });   
  var page = htutil.page("Math Wizard", htutil.navbar(),"<p>Math Wizard</p>");
  console.log(page);
  res.end(
  	 page
  ); 
} 
