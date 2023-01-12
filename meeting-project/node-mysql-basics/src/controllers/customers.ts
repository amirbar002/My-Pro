import { Customer } from '../interfaces/customer'
import customerModel from '../models/customers'


export const save = async (data: Customer): Promise<any> => {
    try {
        const { id, dataFrom,   dataTo,  Description, Room} = data
        const customer = new customerModel(id, dataFrom,   dataTo,  Description, Room ? Room : 0)
        const [ res ] = await customer.save()
        return res.affectedRows ? res.insertId : null
    } catch (error) {
        console.log(error)
        return null
    }
}

export const find = async (id? : string) : Promise<any> => {
    const [customer] = await customerModel.find(id)
    return customer
}

export const update = async (id: string, data: Customer): Promise<boolean> => {
    const { dataFrom,   dataTo,  Description, Room} = data
    if( dataFrom === undefined &&   dataTo === undefined &&  Description === undefined && Room === undefined) return false

    const customer = new customerModel( id, dataFrom,   dataTo,  Description, Room)

    const [res] = await customer.update(id)
    return res.affectedRows ? true : false
}


export const deleteById = async (id: string) : Promise<boolean> => {
    const [res] = await customerModel.delete(id)
    return res.affectedRows ? true : false
}