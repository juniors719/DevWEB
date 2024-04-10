import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slice/CounterSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
    },
});

export default store;
