import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startingData: [],
    dataFiltered: [],
    valueInput: '',
    toggleData: null,
    classToggleLeft: '',
    classToggleRight: '',
    startingDetails: [],
    colorSelected: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setStartingData: (state, action) => {
            if(state.startingData.length === 0){
                state.startingData = action.payload
            } else {
                throw new Error('Initial data cannot be changed')
            }
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
        setStartingColor: (state, action) => {
            state.startingDetails = action.payload
        },
        setColorSelected: (state, action) => {
            state.colorSelected = action.payload
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

export const { 
    setColorSelected, 
    setStartingColor, 
    setInitialState, 
    setStartingData, 
    setDataFiltered, 
    setValueInput, 
    setToggleData, 
    setClassToggleLeft, 
    setClassToggleRight 
} = dataSlice.actions

export default dataSlice.reducer