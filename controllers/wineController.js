//implement router from express
const express = require ('express');
var router=express.Router();

//require statement for wine model
var { wine } = require('../models/wines');

//add router for wine collection - request and response
//execute get request =>localhost:3000/wine/list
router.get('/', (req, res) => {
    wine.find((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log('Error in Retrieving Employees : ' + JSON.stringify(err, undefined, 2));}
    });
});

//post request 
router.post('/', (req, res) => {
    //create object of wine callled myWine - send details of wine using request.body object
    var myWine = new wine({
        name: req.body.name,
        description: req.body.description,
        typeOfWine: req.body.typeOfWine,
        size : req.body.size,
        price :req.body.price,
    })
})


//export the router object
module.exports=router;