import { useState } from "react";

export const useFetchBooks = ()=>{
    const API_URL = "https://openlibrary.org/search.json?";
    const [error,setError] = useState(null);

    const fetchBooks = async (type,val,fetchFun,valFunc)=>{
        try{
            fetchFun(true)
            const doc = await fetch(`${API_URL}${type}=${val}&limit=10`);
            const result = await doc.json();
            if (!doc.ok) {
                throw new Error(`HTTP error! status: ${doc.status}`);
            }
            valFunc(result.docs);
        }catch(error){
            setError(error.message)
            fetchFun(false)
        }finally{
            fetchFun(false)
        }
    }
    const makeAuthorRequest = async (respAuthFun)=>{
        try{
            const doc = await fetch(`https://openlibrary.org/search/authors.json?q=*&limit=20`);
            const result = await doc.json();
            if (!doc.ok) {
                throw new Error(`HTTP error! status: ${doc.status}`);
            }
            respAuthFun(result.docs);

        }catch(error){
                setError(error.message)
        }
    }
    const makeBooksRequest = async (respSubFun)=>{
        try{
            const doc = await fetch(`https://openlibrary.org/search/authors.json?q=*&limit=20`);
            const result = await doc.json();
            if (!doc.ok) {
                throw new Error(`HTTP error! status: ${doc.status}`);
            }
            respSubFun(result.docs);

        }catch(error){
                setError(error.message)
        }
    }

    return{
        fetchBooks,error,makeAuthorRequest,makeBooksRequest
}
}