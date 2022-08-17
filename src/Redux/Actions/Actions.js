import { PRINT_VALUE,EDIT_VALUE,DELETE_VALUE,} from "../Constent";

export const printvalueActions = (data)=>{
    return(
        {
            type:PRINT_VALUE,
            payload:data
        }
    )
}

export const editvalueActions = (id)=>{
    return(
        {
            type:EDIT_VALUE,
            payload:id
        }
    )
}

export const deletevalueActions = (id) =>
{
    return(
        {
            type:DELETE_VALUE,
            payload:id
        }
    )
}




