import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" placeholder="Jessica" />
      </div>
      <div>
        <label htmlFor="lastName">First Name:</label>
        <input type="text" name="lastName" placeholder="Jones" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Jessica.jone@gmail.com" />
      </div>
      <div>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  );
};

export default ContactForm;
