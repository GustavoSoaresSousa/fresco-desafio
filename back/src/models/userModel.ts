import mongoose from "mongoose";

const CreateUserSchema = new mongoose.Schema({
  nome: {type: String, require: true},
  email: {type: String, require: true},
  senha: {type: String, require: true}
})

export const CreateUserModel = mongoose.model('usuarios', CreateUserSchema);
