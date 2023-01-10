import axios from "axios";
import { GET_ALL_IT_GROUPES ,GET_ALL_POSTS } from "./ApiUrls";


//================================== IT Groupes
//@GET
export const getAllGroupes = async ({pageParam = 1} ) =>{
    return await axios.get(`${GET_ALL_IT_GROUPES}?_limit=3&_page=${pageParam}`);
    
}
//================================== Posts
//@GET
 
export const getAllPosts = async ({ pageParam = 1 }) =>{
    return await axios.get(`${GET_ALL_POSTS}?_limit=4&_page=${pageParam}`);
    
}