import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import App from '../App';
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { printvalueActions } from "../Redux/Actions/Actions";
import{printvaluereducer}  from "../Redux/Reducer/Reducer"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4}  from "uuid"



function From() {   

    const data =useSelector((state)=>state.printvaluereducer.states);

    console.log(data)

    // const [edit,setedit]=useState(data)
    

    const IState = {
        id:"",
        fname: "",
        email: "",
        Contacts: ""
    }
    const [user, setUser] = useState(IState)

    const { fname, email, Contacts } = user

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const btnHandler = (e) => {

        navigate('/List')

        e.preventDefault()

        dispatch(printvalueActions(user))

    }

    const handleChange = (e) => {

        setUser({ ...user,id:uuidv4(), [e.target.name]: e.target.value })

    }

    return (
        <div>
            <App />
            <h1 align="center">From Validation</h1>
            <Form>
                <label>NAME:</label>
                <input type="text" placeholder='Enter your name' autoComplete='off' name='fname' onChange={(e) => handleChange(e)} value={fname} />
                <br></br>
                <label>Email:</label>
                <input type="text" placeholder='Enter your Email Address' autoComplete='off' name='email' onChange={(e) => handleChange(e)} value={email} />
                <br></br>
                <label>Contacts:</label>
                <input type="text" placeholder='Enter your contacts Number' autoComplete='off' name='Contacts' onChange={(e) => handleChange(e)} value={Contacts} />
                <br></br>
                <div>
                    <input type="submit" value="Submit" onClick={(e) => btnHandler(e)} />
                </div>
                {


                }
            </Form>
        </div>
    )
}
export default From;