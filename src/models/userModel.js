
import DB from "../config/DB.js";
import bcrypt from "bcrypt";

const userSchema = new DB.Schema({
    nome: {type: String, required: true},
    aniversario:{type: Date, required: true},
    email: {type: String, unique: true,
        validate: {validator:
          function(v){return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
        }, required: true}},
    password: {type: String, required: true, minLength: 5},
    permissao: {type: String, enum: ["ADM", "USR"], required: true, default: "USR"},
    telefones:{type: Array, required: true,},
    endereco: {type: Object, minLength: 8, maxLength: 8},
    numero_casa:{type: String, required: true}
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

userSchema.methods.senhaCorreta = async function (senha) {
  return await bcrypt.compare(senha, this.password);
};

const User = DB.model("User", userSchema);

export default User;
