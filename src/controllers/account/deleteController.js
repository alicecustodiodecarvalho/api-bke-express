import { deleteAccount } from "../../models/accountModel.js"

const del = async (req, res) => {
    const { id } = req.params
    try {
        const account = await deleteAccount(+id)

        return res.json({
            success: "Conta deletada com sucesso!",
            account
        })
    } catch (error) {
        console.error(error)
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com id ${id}, não encontrado!`
            })
        return res.status(500).json({
            error: `Erro no servidor!`
        })
    }
}

export default del