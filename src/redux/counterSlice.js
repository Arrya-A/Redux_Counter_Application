import { createSlice } from "@reduxjs/toolkit"

// all the functions and keys are predefined

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    // action
    // reducers is a predefined key to hold actions to update state in components
    reducers:{
        // action to increment state
        increment:(state)=>{
            state.value+=1
        },
        // actionto decrement state
        decrement:(state)=>{
            state.value-=1
        },
        // action to reset state
        reset:(state)=>{
            state.value=0
        },
        incrementByRange:(state,action)=>{
            state.value+=action.payload
        }
    }
})
// actions are need for components to update state
export const {increment, decrement,reset, incrementByRange}=counterSlice.actions
export default counterSlice.reducer