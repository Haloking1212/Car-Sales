export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const selectedFeature = feature => {
    console.log(feature,"feat")
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removedFeature = id => {
    
    return {
        type: REMOVE_FEATURE,
        payload: id
    }
}