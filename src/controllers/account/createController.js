import { create, accountValidateToCreate } from "../../models/accountModel.js"

const createController = async (req, res, next) => {
    try {
        const account = req.body

        const accountValidated = accountValidateToCreate(account)
        console.log(accountValidated)

        if(!accountValidated?.error)
            return res.status(401).json({
                error: "Erro ao criar conta!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        const result = await create(accountValidated.data)

        if (!result)
            return res.status(401).json({
                error: "Erro ao criar conta"
            })

        res.json({
            success: "Conta criada com sucesso",
            account: result
        })
    } catch (error) {
        next(error)
    }
}

export default createController