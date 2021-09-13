/* eslint-disable no-sequences */
const initialState = 0;

const reset = (state = initialState, action) => {
  switch (action.type) {
    case "reset":
      return ( 
          action.payload.bill = 0,
        action.payload.tip = 0,
        action.payload.person = 0);
    default:
      return state;
  }
}; 

export default reset;






