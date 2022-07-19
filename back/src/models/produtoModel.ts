import mongoose from "mongoose";

const CreateProductSchema = new mongoose.Schema({
  nome: {type: String, require: true},
  estoque: {type: String, require: true},
  preco: {type: Number, require: true},
  quantidade: {type: Number, default: 0},
});

export const CreateProductModel = mongoose.model('produtos', CreateProductSchema);
