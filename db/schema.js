const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE - Evaluation
// ----------------------
const evaluationSchema = new Schema({
  imgLink:      { type: String, required: true },
  description:  { type: String, required: true },
  upVotes:      { number: String, default: 0 },
  createdAt:    { type: Date, default: Date.now }
})



module.exports = {
   /*
    * NOTE: you need to export the model like so
    */
  Evalutaion: createModel('evaluationSchema', evaluationSchema)
}
