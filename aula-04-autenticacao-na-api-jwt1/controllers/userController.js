import userService from "../services/userService";

const createUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        await userService.Create(email, password);
        res.status(201).json({message:'Usuário cadastrado com sucesso'});
    }catch(error){
    console.log(error);
    res.status(500).json({error:'Erro interno do servidor.'})
}
}