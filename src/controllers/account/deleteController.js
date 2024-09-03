import { deleteAccount } from "../../models/accountModel.js"

const del = async (req, res) => {
    const {id} = req.params
    const account = await deleteAccount(+id)

    if(!account)
        return res.status(404).json({
            error: `Conta com id ${id}, não encontrado!`
        })

    return res.json({
        success: "Conta deletada com sucesso!",
        account
    })
}

export default del