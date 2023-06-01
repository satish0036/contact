import './ContactList.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../redux/actions';

function ContactList() {
  // Get the contacts from the Redux store
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  // Handle contact deletion
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    // full layut of page
    <div className='contact_layout'>

    {/* contact heading */}
      <div className='contact_header'>
        <h2>Contact Page</h2>
      </div>

    {/* body of page */}
      <div className='container'>
        <div className='left_container'>
          <Link to="/"><div className='left_menu'>Contact</div></Link>
          <Link to="/ChartsAndMaps"><div className='left_menu'>Charts and Maps</div></Link>
          <div className='left_menu'>Slidebar</div>
        </div>
        <div className='right_container'>
          <div className='create_contact'><Link to="/add" className='create_contact1'><div>Create Contact</div></Link></div>
          {contacts.length > 0 ? (
            <ul className='all_contacts'>
              {contacts.map(contact => (
                <li key={contact.id} className='current_contacts'>
                  <div className='contact_name'>{contact.firstName} {contact.lastName}</div>


                  {/* <div>Status:{contact.status}</div> */}

                  <Link to={`/edit/${contact.id}`}><button className='edit' >Edit</button></Link>
                  <button onClick={() => handleDelete(contact.id)} className='delete'>Delete</button>
                  <Link to={`/contact/${contact.id}`}  ><button className='view'>View Details</button></Link>
                </li>
              ))}
            </ul>
          ) : <div className='no_contact'>No contact found please add contact from create contact button</div>}

        </div>
      </div>
    </div>
  );
}

export default ContactList;
