import { update } from "../../models/accountModel.js"

const updateController = async (req, res, next) => {
    try{
        const account = req.body
        const {id} = req.params
        account.id= +id
       
        const result = await update(account)
   
        if (!result)
            return res.status(401).json({
                error: "Erro ao atualizar conta"
            })
   
        res.json({
            success: "Conta atualizada com sucesso" ,
            account: result
        })
    }catch (error) {
        next(error)
    }
}

export default updateController