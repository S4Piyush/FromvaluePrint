import { configureStore } from "@reduxjs/toolkit";
import {printvaluereducer} from "./Redux/Reducer/Reducer"


const Store = configureStore({
    reducer:{
        printvaluereducer
    }       
 
})
export default Store;