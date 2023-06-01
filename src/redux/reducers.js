import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './actionTypes';

const initialState = {
  contacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      const updatedContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    case EDIT_CONTACT:
      const { id, updatedContact } = action.payload;
      const updatedContactList = state.contacts.map(contact =>
        contact.id === id ? updatedContact : contact
      );
      return {
        ...state,
        contacts: updatedContactList,
      };
    default:
      return state;
  }
};

export default reducer;