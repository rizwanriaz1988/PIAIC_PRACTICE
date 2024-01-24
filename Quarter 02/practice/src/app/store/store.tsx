"use client"
import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice";
import { Provider } from "react-redux";

const store = configureStore({
    reducer:
    {
        counter
    }
})


const Providing = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
    
}

export default Providing