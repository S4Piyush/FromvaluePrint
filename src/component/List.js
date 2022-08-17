import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import App from '../App';
import { useDispatch,useSelector} from "react-redux";
import {printvalueActions} from "../Redux/Actions/Actions";
import { useEffect, useState } from 'react';
import { deletevalueActions } from '../Redux/Actions/Actions';
import { editvalueActions } from '../Redux/Actions/Actions';
import  {useNavigate} from  "react-router-dom";

function List(){

    const data =useSelector((state)=>state.printvaluereducer.states);

    // const [print,setprint]=useState(data)
    
    const dispatch = useDispatch();

    const btnDelete = (id)=>{

    dispatch(deletevalueActions(id))

    }

    const navigate = useNavigate()

    const btnEdit = (id) =>
    {
          navigate('/From')
          dispatch(editvalueActions(id))  

    }
    
    
  
    return(
        <div>   
             <App/>
             <Table className='text-center'>
              <thead align='center' >
                <tr>
                    <th>id</th>
                    <th>NAME</th>
                    <th>Email</th>
                    <th>Contacts</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead> 
                <tbody>
                    {
                      data.map((element,index)=> 
                          <tr key={index}>
                          <td>{index}</td>
                          <td>{element.fname}</td> 
                           <td>{element.email}</td> 
                           <td>{element.Contacts}</td> 
                           <td><input type="button" value="Edit" onClick={()=>btnEdit(element.id)}></input></td>
                           <td><input type="button" value="Delete" onClick={()=>btnDelete(element.id)}></input></td>
                        </tr>
                      )  
                    }
                </tbody>
                </Table>
        </div>

    )
}
export default List;