import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Buy groceries" }],
};

export const tpdoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        
    }
})