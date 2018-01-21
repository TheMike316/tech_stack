export const selectLibrary = (libraryId) => {
  console.log('wooohooooooo');
  return ({
    type: 'select_library',
    payload: libraryId
  });
};
