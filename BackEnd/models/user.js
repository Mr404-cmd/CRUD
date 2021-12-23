import mongoose from "mongoose";
const countriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  }
});
const userModel = mongoose.model("Countries", countriesSchema);
export default userModel;
