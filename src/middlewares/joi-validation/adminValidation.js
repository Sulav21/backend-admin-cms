import Joi from 'joi'

export const newAdminValidation=(req,res,next)=>{
    const schema = Joi.object({
        fName:Joi.string().required().min(3).max(20),
        lName:Joi.string().required().min(3).max(20),
        email:Joi.string().email({ minDomainSegments: 2 }).required(),
        phone:Joi.string().required().min(10).max(15),
        dob:Joi.date().allow(null),
        address:Joi.string().allow(null),
        password:Joi.string().required()
    })

    const {value,error} = schema.validate(req.body)
     
    if(error){
       return res.json({
            status:"error",
            message:error.message
        })
    }

    next()
}