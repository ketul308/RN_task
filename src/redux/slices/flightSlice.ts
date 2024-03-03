import { createSlice } from "@reduxjs/toolkit";

const initialState: state = {
    status: "idle",
    flightList: [],
    error: undefined
}

const flightSlice = createSlice({
    name: "flight",
    initialState,
    reducers: {
        setFlightList: (state, action) => {
            state.flightList = action.payload
        },
        toggleStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    }
});

const { setFlightList, toggleStatus, setError } = flightSlice.actions;

export { flightSlice, setFlightList, toggleStatus, setError };
