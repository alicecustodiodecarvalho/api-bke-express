import { create } from "../../models/authModel.js"


const signup = async (req, res) => {
    const user = req.body
    const result = await create(user)


    if (!result)
        return res.status(401).json({
            error: "Erro ao cadastrar"
        })


    res.json({
        success: "Cadastro realizado com sucesso",
        account: result
    })


    res.json({ message: "Rota de POST Auth/singup" })
}


export default signup