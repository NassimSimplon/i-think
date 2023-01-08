import axios from "axios";
import { GET_ALL_IT_GROUPES } from "./ApiUrls";
//@//================================== IT Groupes
//@GET
export const getAllGroupes = async () =>{
    const response = await axios.get(GET_ALL_IT_GROUPES);
    return response;
}