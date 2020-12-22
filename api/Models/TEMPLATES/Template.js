//Bismillahi-Ramani-rrahiim
//Backend by Kingthrive for project Portfolio v0.1.0

//     templateImage: {
//     url: "",
//     style: {
//     borderRadius: "",
//     },
//     },
//     buttonLeft: {
//     backgroundColor: "",
//     fontSize: "",
//     color: "",
//     width: "",
//     height: "",
//     padding: "",
//     },
//     buttonRight: {
//     backgroundColor: "",
//     fontSize: "",
//     color: "",
//     width: "",
//     height: "",
//     padding: "",
//     },
//     socialLinks: {
//     github: "",
//     twitter: "",
//     linkedin: "",
//     email: "",
//     blog: "",
//     },

//     project: [
//     {
//     projectImage: "",
//     projectTitle: "",
//     projectUrl: "",
//     projectDescription: "",
//     },
//     ],
//     skills:[
//     {
//     skillName:'',
//     skillPng:'',
//     }
//     ],
//     resumeFile:''
//     };

//      Auto-add template to user table when a user registers for the first time
//     The endpoints
//      POST /users/template/add ----- creates the virtual template column in the user table (This will have the same structure as the first template table)
//      GET /users/template ----- fetches the template the user has in its table
//      PUT /users/template/edit_template ----- edit/update the template
//      DELETE /users/template/delete_template ----- deletes the virtual template column in the user table
//     Note:
//     All template endpoints are to return the template object in the user table without the ids

//Template Model
const mongoose = require("mongoose");
const template = new mongoose.Schema({
  //intro
  introText: {
    type: String,
    required: true,
    trim: true,
    min: 30,
    max: 55,
  },
  //styling
  introColor: {
    Type: String,
    required: true,
    trim: true,
  },
  introFontSize: {
    type: Number,
    required: true,
    trim: true,
  },
  introFontWeight: {
    type: Number,
    required: true,
    trim: true,
  },
  introFontFamily: {
    type: String,
    required: true,
    trim: true,
  },
  introPaddingX: {
    type: Number,
    required: true,
    trim: true,
  },
  introPaddingY: {
    type: Number,
    required: true,
    trim: true,
  },
  introLineHeight: {
    type: Number,
    required: true,
    trim: true,
  },
  introParagraphText: {
    type: String,
    trim: true,
    min: 20,
    max: 50,
  },

  paragraphColor: {
    type: String,
    trim: true,
    required: true,
  },
  paragraphFontSize: {
    type: String,
    trim: true,
    required: true,
  },
  paragraphFontWeight: {
    type: String,
    trim: true,
  },
  paragraphPaddingX: {
    type: Number,
    required: true,
    trim: true,
  },
  paragraphPaddingY: {
    type: Number,
    required: true,
    trim: true,
  },
  paragraphLetterSpacing: {
    type: Number,
    required: true,
    trim: true,
  },
  paragraphLineHeight: {
    type: Number,
    required: true,
    trim: true,
  },
  //templateImage
  templateImageUrl:{
    type: String,
    trim: true,
    required:true

  }
  //to be continued.................
});
