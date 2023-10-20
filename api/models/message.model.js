import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageScheme = new Schema({
  conversationId:{
    type:String,
    required:true,
  },
  userId:{
    type:String,
    required:true,
  },
  desc:{
    type:String,
    required:true,
  },

  
},{
    timestamps:true,
});

export default mongoose.model("Message",messageScheme)