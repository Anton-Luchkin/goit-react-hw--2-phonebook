import React from 'react';
import PropTypes from 'prop-types';

import s from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        className={s.delContactBtn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
