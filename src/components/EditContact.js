import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editContact } from '../redux/actions';
import { Link } from 'react-router-dom';
function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve the contact from the Redux store based on the ID
  const contact = useSelector(state =>
    state.contacts.find(contact => contact.id === id)
  );


  // Define state variables for form input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('');


  // Update the state variables when the contact changes
  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    }
  }, [contact]);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedContact = {
      id,
      firstName,
      lastName,
      status
    };
    dispatch(editContact(id, updatedContact));
    // Navigate back to the home page after saving the edits
    navigate('/');
  };

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

      {contact ? (
        <>
          <div className='create_contact'>Edit Contact Screen</div>
          <form onSubmit={handleSubmit} className='contact_form'>
            <div className='contact_first_name'>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className='contact_last_name'>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div  className='contact_status'>
              <label>Status:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="active"
                    checked={status === 'active'}
                    onChange={() => setStatus('active')}
                  />
                  Active
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="inactive"
                    checked={status === 'inactive'}
                    onChange={() => setStatus('inactive')}
                  />
                  Inactive
                </label>
              </div>
            </div>
            <button type="submit" className='contact_button'>Save Edited Content</button>
          </form>
        </>
      ) : (
        <div>No contact found.</div>
      )}
      </div>
      </div>
    </div>
  );
}

export default EditContact;
