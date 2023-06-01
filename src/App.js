import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';
import ChartsAndMaps from './ChartsAndMaps/ChartsAndMaps'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        {/* Route for the these component */}
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<ContactForm />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path='/ChartsAndMaps' element={<ChartsAndMaps/>}/> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;