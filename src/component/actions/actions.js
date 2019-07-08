export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const CLICK_REQUEST_DATA = "CLICK_REQUEST_DATA";
export const FILTERED_DATA = "FILTERED_DATA";

export const requestApiData = (response) => ({type: REQUEST_API_DATA, response});
export const receiveApiData = (response) => ({type: RECEIVE_API_DATA, response});
export const clickStoreData = (params) => ({type: CLICK_REQUEST_DATA, params} );
export const filteredFunc = (filteredTitle) => ({type:FILTERED_DATA, filteredTitle});
