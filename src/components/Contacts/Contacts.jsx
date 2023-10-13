import React from 'react';
import { ContactStyle } from './Contacts.styled';
import { deleteContact } from 'redux/sliceContacts';
import { useSelector,useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selector';
export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const getContacts = () => {
    if (Array.isArray(contacts)) {
      const normalizedValue = filter.toLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedValue)
      );
    } else {
      return [];
    }
  };

  return (
    <ContactStyle>
      <ul>
        {getContacts().map(el => {
          return (
            <li key={el.id}>
              {el.name} {el.phone}
              <button
                onClick={() => {
                  dispatch(deleteContact(el.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </ContactStyle>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
