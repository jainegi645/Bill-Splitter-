const tipState = 0;


const tip = (state = tipState, action) => {
  switch (action.type) {
    case "tipAction":
      return state = action.payload;
    default:
      return state;
  }
};

export default tip;
