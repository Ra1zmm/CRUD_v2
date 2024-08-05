import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String,
        required : true
   },
   email: { type: String,
    required : true
},
});
//naming the model "User" from the "userSchema"
export default mongoose.model('User',userSchema)