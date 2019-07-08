export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const CLICK_REQUEST_DATA = "CLICK_REQUEST_DATA";

export const requestApiData = (response) => ({type: REQUEST_API_DATA, response});
export const receiveApiData = (response) => ({type: RECEIVE_API_DATA, response});
export const clickStoreData = (params, data) => ({type: CLICK_REQUEST_DATA, params, data} );
