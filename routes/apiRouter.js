let Router = require('express').Router;
const apiRouter = Router()

/*
 * NOTE: import the Evaluation model
 */
let Evaluation = require('../db/schema.js').Evaluation

apiRouter
/*
 * NOTE: rename the routes
 */
 .get('/evaluations', function(req, res){
    Evaluation.find(req.query , function(err, results){
      if(err) return res.json(err)
      res.json(results)
   })
 })
 .post('/evaluations', function(req, res){
     let newRecord = new Evaluation(req.body)

     newRecord.save(function(err, record){
        if(err) return res.status(500).send('server/db error on attempt to save user to db')
        let userCopy = newRecord.toObject()
        delete userCopy.password
        res.json(userCopy)
     })
 })


apiRouter
 .get('/evaluations/:_id', function(req, res){
   Evaluation.findById(req.params._id, "-password", function(err, record){
     if(err || !record ) return res.json(err)
     res.json(record)
   })
 })

 .put('/evaluations/:_id', function(req, res){

   Evaluation.findByIdAndUpdate(req.params._id, req.body, function(err, record){
       if (err) {
         res.status(500).send(err)
       }
       else if (!record) {
         res.status(400).send('no record found with that id')
       }
       else {
         res.json(Object.assign({},req.body,record))
       }
   })
 })

 .delete('/evaluations/:_id', function(req, res){
   Evaluation.remove({ _id: req.params._id}, (err) => {
     if(err) return res.json(err)
     res.json({
       msg: `record ${req.params._id} successfully deleted`,
       _id: req.params._id
     })
   })
 })

 // TO DELETE ALL:
 // .delete("/evaluations/all/records", function(req, res){
 //   Evaluation.remove({}, (err) => {
 //     if(err) return res.json(err)
 //     res.json({
 //       msg: `EVEYTHING successfully deleted`
 //     })
 //   })
 // })

module.exports = apiRouter
