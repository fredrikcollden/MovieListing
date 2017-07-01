import { combineReducers } from 'redux'
import { SERIES_HAS_ERROR, SERIES_IS_LOADING, SERIES_GOT_DATA } from '../actions/actions'


export function seriesHasError(state = false, action){
    switch (action.type) {
        case SERIES_HAS_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function seriesIsLoading(state = false, action){
    switch (action.type) {
        case SERIES_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function series(state = [], action) {
    switch (action.type) {
        case SERIES_GOT_DATA:
            return action.series;
        default:
            return state;
    }
}

const reducers = combineReducers({
  seriesHasError: seriesHasError,
  seriesIsLoading: seriesIsLoading,
  series: series
})

export default reducers;