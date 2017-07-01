import axios from 'axios';

export const SERIES_HAS_ERROR = 'SERIES_HAS_ERROR'
export const SERIES_IS_LOADING = 'SERIES_IS_LOADING'
export const SERIES_GOT_DATA = 'SERIES_GOT_DATA'

export function seriesHasError(bool){
    return {type: SERIES_HAS_ERROR, hasError: bool}
}
export function seriesIsLoading(bool){
    return {type: SERIES_IS_LOADING, isLoading: bool}
}
export function seriesGotData(series){
    return {type: SERIES_GOT_DATA, series: series}
}

export function seriesGetData(url) {
    return (dispatch) => {
        dispatch(seriesIsLoading(true));
        
        axios.get(url)
        .then(function (response) {
            console.log(response);
            console.log(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']);
			dispatch(seriesIsLoading(false));
            dispatch(seriesGotData(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']));
            return response;
        })
        .catch(function (response) {
            console.log(response);
			//dispatch(seriesHasError(true));
            //dispatch(seriesIsLoading(false));
            //dispatch(seriesGotData(response));
        });
    };
}
