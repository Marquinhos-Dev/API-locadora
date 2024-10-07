
import DB from "../config/DB.js";

const aluguelSchema = new DB.Schema({
    alugado_por: {type: DB.Schema.Types.ObjectId, ref: 'User', required: true},
    filme_alugado: {type: DB.Schema.Types.ObjectId, ref: 'Filme', required: true},
    data_aluguel: {type: Date, required: true},
    data_devolucao: {type: Date, required: true},
});

const Aluguel = DB.model("Aluguel", aluguelSchema);

export default Aluguel;