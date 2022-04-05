import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, GetAllUsers,DeleteUSer,EditUser } from '../../State/Action/Action'

import "./style.css"
const Home = () => {
  const data=useSelector((state)=>state.data.data)
  // console.log(data)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(GetAllUsers())
  })
  
const [name,setName]=useState("")
const [email,setemail]=useState("")
const [file,setFile]=useState("")

const handlesubmit=(e)=>{
  let formData  = new FormData();
  formData .append('name', name);   //append the values with key, value pair
formData .append('email', email);
formData .append('file', file);
 
  e.preventDefault()
dispatch(AddUser(formData ))
}

const [id ,setUpdateid]=useState("")

const handleupdate=(_id)=>{
  setUpdateid(_id)
}
const handleUpdate=(e)=>{
  e.preventDefault()
  let formData  = new FormData();
  formData .append('name', name);   //append the values with key, value pair
formData .append('email', email);
formData .append('file', file);
  dispatch(EditUser(id,formData))
  setTimeout(() => {
    setUpdateid("")
  }, 2000);
}
  return (
    <>
      <div className='homesection '>
        <form autoComplete="off" >
          {id?( <h3>Update Record</h3>):( <h3>Add Record</h3>)}
         
          <div className="form-group">
            <label >Name</label>
            <input  type="text" required className="form-control" onChange={(e)=>setName(e.target.value)}  placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label >Enter Email</label>
            <input  type="email" required className="form-control" onChange={(e)=>setemail(e.target.value)}  placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label >Choose file</label>
            <input  type="file" required className="form-control" onChange={(e)=>setFile(e.target.files[0])}  placeholder="Enter Email" />
          </div>
          {id?(<button type="submit" className="btn btn-primary" onClick={(e)=>handleUpdate(e)}>Update</button>)
          :<button type="submit" className="btn btn-primary" onClick={(e)=>handlesubmit(e)}>Submit</button>}
          
        </form>
        <div className="container">
          <h2>All Record</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>

              </tr>
            </thead>
            <tbody>
              {
                data.map((result,i)=>{
                  const {name,email,image}=result
                  return(
                    <>
                     <tr key={i}>
               
                <td>{name}</td>
                <td>{email}</td>
                <td><img src={`http://localhost:3000/public/images/${image}`} /></td>

                <td  onClick={()=>handleupdate(result._id)} ><i class='fas fa-edit  text-success'></i></td>
                <td  onClick={()=>dispatch(DeleteUSer(result._id))} ><i class='fas fa-trash text-danger'></i></td>

              </tr>
                    </>
                  )
                })
              }
             
           
            </tbody>
          </table>

        </div>

      </div>
    </>
  )
}

export default Home