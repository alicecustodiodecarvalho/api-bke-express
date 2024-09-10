import { create } from "../../models/accountModel.js"

const createController = async (req, res) => {
    try {
        const account = req.body
        const result = await create(account)

        if (!result)
            return res.status(401).json({
                error: "Erro ao criar conta"
            })

        res.json({
            success: "Conta criada com sucesso",
            account: result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: "Erro no servidor"
        })
    }
}

export default createController