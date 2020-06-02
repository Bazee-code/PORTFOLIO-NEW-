import React from 'react';

// local
import Navbar from './Navbar';
import UserForm from './userform';

const Contacts = ()=>{
	return (
		<div className="contacts-page">
		<div className="text-center mt-3 contacts-header">
			<p>Hire Me</p>
		</div>
			<Navbar />
			<UserForm />
		</div>
	)
};

export default Contacts;