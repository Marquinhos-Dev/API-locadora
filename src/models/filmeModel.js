import DB from "../config/DB.js";

const filmeSchema = new DB.Schema({
  nome: {type: String, required: true},
  data_lancamento: {type: Date, required: true},
  diretor: {type: String, required: true},
  classificacao: {type: String, ENUM:['Livre','Mais16','Mais18'], required: true, default: "Livre"},
});

const Filme = DB.model("Filme", filmeSchema);

export default Filme;
