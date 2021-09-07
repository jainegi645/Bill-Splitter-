// const totalbillState = 0;
const personState = 0;

const person = (state = personState, action) => {
  switch (action.type) {
    case "personAction":
      return (state = action.payload);
    default:
      return state;
  }
}; 

export default person;
