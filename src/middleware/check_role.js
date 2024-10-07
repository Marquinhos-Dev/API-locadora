
function check_role(roles){
    return (req,res,next) => {
        const verificar = roles.includes(req.user.permissao);
        if (verificar) {
          res.status(403).send({message:"Você não tem permissão para executar essa função!"});
        } else next();
    };
};

export default check_role;