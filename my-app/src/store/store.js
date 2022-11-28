import { createStore } from 'redux';
import { TYPES } from './types';

const initialState = {
    startingData: [],
    isLoading: true,
    loadData: [],
    valueInput: undefined,
    toggleData: null,
    classToggleLeft: '',
    classToggleRight: '',
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.LOAD_DATA:
            return{
                ...state,
                loadData: action.loadData
            }           
        case TYPES.STARTING_DATA:
            return{
                ...state,
                startingData: action.startingData
            }
        case TYPES.IS_LOADING:
            return{
                ...state,
                isLoading: action.isLoading
            }
        case TYPES.INPUT_VALUE:
            return{
                ...state,
                valueInput: action.valueInput
            }
        case TYPES.TOGGLE_DATA:
            return{
                ...state,
                toggleData: action.toggleData
            }
        case TYPES.CLASS_TOGGLE_LEFT:
            return{
                ...state,
                classToggleLeft: action.classToggleLeft
            }
        case TYPES.CLASS_TOGGLE_RIGHT:
            return{
                ...state,
                classToggleRight: action.classToggleRight
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store
