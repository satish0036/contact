import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ContactDetails() {
  const { id } = useParams();

  // Get the contact with the matching ID from the Redux store
  const contact = useSelector(state =>
    state.contacts.find(contact => contact.id === id)
  );
  // If no contact is found, display a message
  if (!contact) {
    return <div>No contact found.</div>;
  }

  const { firstName, lastName, status } = contact;

  return (
    <div className='contact_layout'>
      <div className='contact_header'>
        <h2>Contact Page</h2>
      </div>
      <div className='container'>
        <div className='left_container'>
          <Link to="/"><div className='left_menu'>Contact</div></Link>
          <Link to="/ChartsAndMaps"><div className='left_menu'>Charts and Maps</div></Link>
          <div className='left_menu'>Slidebar</div>
        </div>
        <div className='right_container'>

          <h2>Contact Details</h2>
          <div>
            <div>
              <strong>First Name:</strong> {firstName}
            </div>
            <div>
              <strong>Last Name:</strong> {lastName}
            </div>
            <div>
              <strong>Status:</strong> {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
