import { TYPES } from './types';

export const startingData = (startingData) => {
    return {
        type: TYPES.STARTING_DATA,
        startingData,
    }
};

export const setLoading = (isLoading) => {
    return {
        type: TYPES.IS_LOADING,
        isLoading,
    }
};

export const setData = (loadData) => {
    return {
        type: TYPES.LOAD_DATA,
        loadData,
    }
};

export const setValueInput = (valueInput) => {
    return {
        type: TYPES.INPUT_VALUE,
        valueInput,
    }
};

export const setToggleData = (toggleData) => {
    return {
        type: TYPES.TOGGLE_DATA,
        toggleData,
    }
};

export const setClassToggleLeft = (classToggleLeft) => {
    return {
        type: TYPES.CLASS_TOGGLE_LEFT,
        classToggleLeft,
    }
};

export const setClassToggleRight = (classToggleRight) => {
    return {
        type: TYPES.CLASS_TOGGLE_RIGHT,
        classToggleRight,
    }
};

