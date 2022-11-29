import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startingData: [],
    isLoading: true,
    dataFiltered: [],
    valueInput: undefined,
    toggleData: null,
    classToggleLeft: '',
    classToggleRight: '',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setStartingData: (state, action) => {
            state.startingData = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setDataFiltered: (state, action) => {
            state.dataFiltered = action.payload
        },
        setValueInput: (state, action) => {
            state.valueInput = action.payload
        },
        setToggleData: (state, action) => {
            state.toggleData = action.payload
        },
        setClassToggleLeft: (state, action) => {
            state.classToggleLeft = action.payload
        },
        setClassToggleRight: (state, action) => {
            state.classToggleRight = action.payload
        }
    }
})

export const { setStartingData, setLoading, setDataFiltered, setValueInput, setToggleData, setClassToggleLeft, setClassToggleRight } = dataSlice.actions

export default dataSlice.reducer