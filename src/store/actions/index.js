export const ADD_FEATURE = "ADD_FEATURE";

export const selectedFeature = feature => {
    console.log(feature,"feat")
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}