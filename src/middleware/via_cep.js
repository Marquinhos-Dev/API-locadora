import axios from 'axios';

const cep_endereco = (req, res, next) => {

   req.body.cep = req.body.cep.replaceAll(".", "").replaceAll("-", "")

   if ((req.body.cep.length == 8) && (!isNaN(Number(req.body.cep)))){
      axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
         .then(resposta => {
            delete req.body.cep 

            req.body.endereco = resposta.data

            console.log(resposta.data)

            next()
         })
   } else {
      res.status(400).send()

   };
};

export default cep_endereco; 