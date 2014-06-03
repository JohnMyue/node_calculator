var port = 8124;
var http = require('http');
var htutil = require('./htutil');
var server = http.createServer(function(req,res){
	htutil.loadParams(req,res,undefined);
	console.log('服务启动');
	console.log(req.requrl.pathname);

		if (req.requrl.pathname ==='/') {
			require('./home-node').get(req,res);
		}else if (req.requrl.pathname === '/square') {
			require('./square-node').get(req,res);
		}else if (req.requrl.pathname === '/factorial') {
			require('./factorial-node').get(req,res);
		}else if (req.requrl.pathname === '/fibonacci') {
			require('./fibonacci-node').get(req,res);
		} else if (req.requrl.pathname === '/mult') { 
		    require('./mult-node').get(req, res); 
	  	} else {    
	  		 res.writeHead(404, { 'Content-Type': 'text/plain' }); 
	  	     res.end("bad URL "+ req.url); 
	  	} 
	
});  
	server.listen(port); 

