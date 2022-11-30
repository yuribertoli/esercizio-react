import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startingData: [],
    isLoading: true,
    dataFiltered: [],
    valueInput: '',
    toggleData: null,
    classToggleLeft: '',
    classToggleRight: ''
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
        },
        setInitialState: (state) => {
            state.toggleData = initialState.toggleData
            state.classToggleLeft = initialState.classToggleLeft
            state.classToggleRight = initialState.classToggleRight
            state.valueInput = initialState.valueInput
            state.dataFiltered = state.startingData
        }
    }
})

export const { setInitialState, setStartingData, setLoading, setDataFiltered, setValueInput, setToggleData, setClassToggleLeft, setClassToggleRight } = dataSlice.actions

export default dataSlice.reducer