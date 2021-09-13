/* eslint-disable no-undef */
// const totalbillState = 0;
const billState = 0;

const bill = (state = billState, action) => {
  
  switch (action.type) {
    case "billAction":
      return (state = action.payload);
    default:
      return state;
  }
}; 

export default bill;






