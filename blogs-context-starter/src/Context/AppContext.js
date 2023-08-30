import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading , setLoading] = useState(true);
    const[posts , setPosts] = useState([]);
    const[page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

async function fetchData(page=1){
    setLoading(true);
    const url = `${baseUrl}?page=${page}`
    try {
        const res= await fetch (url);
        const data = await res.json()
        console.log(data);
        setPages(data.page);
        setTotalPages(data.totalPages)
        setPosts(data.posts)
        
    } catch (error) {
        console.log("error");
        setPages(1);
        setPosts([])
        setTotalPages(null)
        
    }
    setLoading(false)
}

const handleChange =(page)=>{
    setPages(page);
    fetchData(page)
}

    const values={
        loading,
    setLoading,
    page, 
    setPages,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    fetchData,
    handleChange

    };


    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>


}