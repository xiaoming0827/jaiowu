var express = require('express');
var router = express.Router();
var http = require('http');
var rp = require('request-promise');
var cheerio = require('cheerio');
var iconv = require('iconv-lite')
var  pool = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
	 for(var i =3000;i<3999;i++){



var options = {
    uri: 'http://121.22.25.47/html/jsxx/'+i+'.html',
    encoding: null,
    transform: function (body) {
    	var html = iconv.decode(body, 'gb2312')
        return cheerio.load(html);
    }
};

rp(options)
    .then(async function resss ($) {
        // Process html like you would with jQuery...
        var dataarr = [];
        $('#Table1').find('tr').each(function(index,ele){
        	var data = $($(this).find('td')[1]);
        	arrdata.push(data.text());
        	console.log(data.text());
        })
        console.log(dataarr)
        await resss;
    })
    .catch(function (err) {
        console.log(err);
    });
    //console.log(i);
    }
    //console.log('end');
})
	
module.exports = router;
