const request = require("request");

module.exports.person = function(token,callback){
	request('https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person?access_token='+token, 
	function (err, res, body) {
		console.log("\tDOCUMENT json response");
		callback(err,JSON.parse(body));
  	
  	});
};


module.exports.calendar = function(token,callback){
	request('https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person/calendar/classes?format=json&access_token='+token, 
	function (err, res, body) {
		console.log("\tDOCUMENT json response");
		callback(err,JSON.parse(body));
  	
  	});
};
