export default (state = null, action) => {
  console.log('fucking work already!');

  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
