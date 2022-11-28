import { createStore } from 'redux';
import { LOAD_DATA, STARTING_DATA, IS_LOADING, INPUT_VALUE, TOGGLE_DATA, CLASS_TOGGLE_LEFT, CLASS_TOGGLE_RIGHT } from './types';

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
        case LOAD_DATA:
            return{
                ...state,
                loadData: action.loadData
            }           
        case STARTING_DATA:
            return{
                ...state,
                startingData: action.startingData
            }
        case IS_LOADING:
            return{
                ...state,
                isLoading: action.isLoading
            }
        case INPUT_VALUE:
            return{
                ...state,
                valueInput: action.valueInput
            }
        case TOGGLE_DATA:
            return{
                ...state,
                toggleData: action.toggleData
            }
        case CLASS_TOGGLE_LEFT:
            return{
                ...state,
                classToggleLeft: action.classToggleLeft
            }
        case CLASS_TOGGLE_RIGHT:
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
