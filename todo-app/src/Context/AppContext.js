import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState(""); 

    const value = {
        tasks,
        setTasks,
        formData,
        setFormData, 
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
