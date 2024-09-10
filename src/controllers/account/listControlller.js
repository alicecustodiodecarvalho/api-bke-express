import { listAccounts } from "../../models/accountModel.js"

const list = async (req, res) => {
    try {
        const accounts = await listAccounts()
        return res.json({
            message: "Contas Listasdas com sucesso!",
            accounts
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: "Erro no servidor"
        })
    }
}

export default list