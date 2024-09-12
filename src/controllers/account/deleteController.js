import { deleteAccount } from "../../models/accountModel.js"

const remove = async (req, res, next) => {
    const { id } = req.params
    try {
        const account = await deleteAccount(+id)

        return res.json({
            message: "Conta deletada com sucesso",
            account
        })
    } catch (error) {
        console.error(error)
        if (error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com id ${id}, não existente!`
            })
        next(error)
    }
}

export default remove