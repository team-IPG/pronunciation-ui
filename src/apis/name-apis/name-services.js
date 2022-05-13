import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:4000"
}); 

export const fetchAllNames = async (fun) => {    
    const res =  await api.get("/names?entry=message"); 
    fun(res.data);
}

