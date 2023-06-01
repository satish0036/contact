import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../redux/actions';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define state variables for form input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: uuid(),
      firstName,
      lastName,
      status
    };

    // Dispatch the addContact action to add the new contact to the Redux store
    dispatch(addContact(newContact));

    // Navigate back to the home page after saving the new contact
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



        
          <div className='create_contact' >Create Contact Screen</div>
          <div className='form_layout'>
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
            <div className='contact_status'>
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
            <button type="submit" className='contact_button'>Save Contact</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
