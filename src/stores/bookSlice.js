import { createSlice } from "@reduxjs/toolkit";

const initialBooksValues = {
    searchedBooks : [],
}

const bookSlice = createSlice({
    name:"books",
    initialState:initialBooksValues,
    reducers:{
        fetchedBooks(state,action){
            state.searchedBooks = action.payload;
        }
    }
})
export const bookAction = bookSlice.actions;
export default bookSlice.reducer;