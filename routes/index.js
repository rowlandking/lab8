var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	//var data = {'grid':false};
  	//res.render('index', [projects,data])
  	projects['grid'] = false;
  	res.render('index', projects);
  	//res.render('index', data)
};

exports.viewGrid = function(req, res){
	//var data = {'grid':true};
	projects['grid'] = true;
	res.render('index', projects);
  	//res.render('index', data)

};