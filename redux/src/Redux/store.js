import { legacy_createStore } from "redux";

let initial = 0;

const reducer = (state= initial,action)=>{
    switch(action.type){
        case "Deposit" :
            return state + 1;
        case "Withdraw" :
            return state - 1;
        default :
            return state;

    }
}


export const store = legacy_createStore(reducer)