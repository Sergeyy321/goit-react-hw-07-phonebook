import React from 'react';
import { ContactStyle } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/sliceContacts';

export const Contacts = ({ getContacts }) => {
  const dispatch = useDispatch();
  return (
    <ContactStyle>
      <ul>
        {getContacts.map(el => {
          return (
            <li key={el.id}>
              {el.name} {el.number}
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
