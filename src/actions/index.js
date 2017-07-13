export const selectPerson = (personID) => {
  return {
    type: 'SELECTED_PERSON',
    payload: personID
  };
};

export const noPersonSelected = () => {
  return {
    type: 'NO_PERSON_SELECTED'
  };
};
