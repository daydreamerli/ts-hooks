import {createContext} from 'react';

const initialState = {
    first:"firstName",
    last:"lastName"
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;

// define a defaultValue as the type of the context <T>

// using createContext create the UseContext

// using ContextProvider passing data

// all the child components of the ContextProvider can use the 
// Context.Consumer to using the data
