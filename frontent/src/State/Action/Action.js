import axios from "axios"
export const GetAllUsers = ()=>async (dispatch)=>{


    const userdata  = await axios.get("/user")
    dispatch({
        type:"Get",
        payload:userdata.data.data
    })

}
export const AddUser = (formData)=>async (dispatch)=>{
   console.log(formData)
  

    const options = {
        headers: { 
            'Content-Type':'application/json'
        },  
    }
    const userdata  = await axios.post("/user/post",formData)
    console.log(userdata)
    dispatch({
        type:"Add",
        payload:userdata
    })

}

export const DeleteUSer = (_id)=>async (dispatch)=>{
        const {userdata}  = await axios.delete(`/user/delete/${_id}`)
       
        dispatch({
            type:"Delete",
            payload:_id
        })
    
    }


    export const EditUser = (id,formData)=>async (dispatch)=>{
   console.log(id,formData)
       
            const options = {
                headers: { 
                    'Content-Type':'application/json'
                },  
            }
            const userdata  = await axios.put(`/user/update/${id}`,formData)
            console.log(userdata)
            dispatch({
                type:"update",
                payload:userdata
            })
        
        }