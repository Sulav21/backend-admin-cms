import adminSchema from './Admin.Schema.js'

export const insertAdmin = (obj)=>{
  return  adminSchema(obj).save()
}

export const getAdmin = (filter)=>{
    return adminSchema.findOne(filter)
}

export const getAdminById=(_id)=>{
    return adminSchema.findById(_id)
}

export const updateAdmin=(_id,obj)=>{
    return adminSchema.findByIdAndUpdate(_id,obj,{new:true})
}

export const deleteAdmin=(_id)=>{
    return adminSchema.findByIdAndDelete(_id)
}