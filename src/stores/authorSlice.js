import { createSlice } from "@reduxjs/toolkit";

const initalAuthorValues = {
    authorList : [],
    topWorkList : [],
    isFetchDone : false
}

const authorSlice = createSlice({
    name :"author",
    initialState : initalAuthorValues,
    reducers :{
            fetchAuthors(state,action){
                state.authorList = action.payload;
            },
            fetchTopWork(state,action){
                state.topWorkList = action.payload;
            },
            setFetchDone(state){
                state.isFetchDone = true
            }
    }
})

export const authorAction = authorSlice.actions;
export default authorSlice.reducer;