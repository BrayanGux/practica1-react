import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ElContact from '../pure/forms/contact';


const ContactList = () => {
    const defaultContact=new Contact('Bryan','Castro','Brayancastro@gmail.com',false)
    return (
        <div>
            <div>
                Your Contact:
                <ElContact cont={defaultContact}></ElContact>
            </div>
        </div>
    );
};


export default ContactList;
