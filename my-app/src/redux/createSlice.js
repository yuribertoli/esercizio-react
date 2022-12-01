import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startingData: [],
    isLoading: true,
    dataFiltered: [],
    valueInput: '',
    toggleData: null,
    classToggleLeft: '',
    classToggleRight: '',
    productDetails: [],
    sharingDetails: []
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
        setProductDetails: (state, action) => {
            state.productDetails = action.payload
        },
        setSharingDetails: (state, action) => {
            state.sharingDetails = action.payload
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

export const { setSharingDetails, setProductDetails, setInitialState, setStartingData, setLoading, setDataFiltered, setValueInput, setToggleData, setClassToggleLeft, setClassToggleRight } = dataSlice.actions

export default dataSlice.reducer