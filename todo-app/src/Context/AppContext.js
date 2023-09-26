import React, { createContext } from 'react'
import { useState } from 'react';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    //state used for handling different operation like edit , add , save, delete:
    const [lists, setList] = useState([]);
    const [input, setInput] = useState('');
    const [editChange, setEditChange] = useState('');
    const [editItemId, setEditItemId] = useState(null);
    const [editingItemId, setEditingItemId] = useState(null);

    // Delete Logic:
    function deleteHandler(id) {
        const newData = lists.filter((list) => list.id !== id);
        setList(newData);
    }

    //edit:
    function editHandler(id) {
        if (editingItemId !== null) {
            // If there is already an item being edited, return without doing anything
            return;
        }
        setEditingItemId(id);
        setEditItemId(id);
        const data = lists.find((list) => list.id === id);
        setEditChange(data.text);
    }

    // Save edit:
    function saveHandler(id) {
        const updatedList = lists.map((list) =>
            list.id === id ? { ...list, text: editChange } : list
        );
        setList(updatedList);
        setEditItemId(null);
        setEditingItemId(null); // Reset editing item ID
    }

    // Cancel logic:
    function cancelEditHandler() {
        setEditItemId(null);
        setEditChange('');
        setEditingItemId(null); // Reset editing item ID
    }

    // Complete logic:
    function completeHandler(id) {
        const updated = lists.map((list) =>
            list.id === id ? { ...list, complete: !list.complete } : list
        );
        setList(updated);
    }

    const value = {
        lists,
        setList,
        input,
        setInput,
        editChange,
        setEditChange,
        editItemId,
        setEditItemId,
        editingItemId,
        setEditingItemId,
        completeHandler,
        cancelEditHandler,
        saveHandler,
        editHandler,
        deleteHandler,
    }
    
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}
