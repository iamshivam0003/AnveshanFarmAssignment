import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const favouritesSlice = createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addToFavourites:(state,actions)=>{
            const existingItem = state.find((ele)=>{return ele?.id == actions?.payload?.id})
            if(!existingItem){
              state.push(actions.payload);
            }
        },
        removeFromFavourites:(state,actions) =>{
            return state.filter((ele, ind) => {
                return  ele?.id != actions?.payload
              });
        }
    }
})


export default favouritesSlice.reducer

export const {addToFavourites,removeFromFavourites} = favouritesSlice.actions