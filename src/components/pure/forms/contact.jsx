import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ElContact = ({cont}) => {
    return (
        <div>
            <h2>
                Nombre: {cont.name}
            </h2>
            <h3>
                Apellido: {cont.apellido}
            </h3>
            <h4>
                Email: {cont.email}
            </h4>
            <h5>
                Conectado: {cont.conectado? 'Contacto en linea': 'Contacto no disponible'}
            </h5>
        </div>
    );
};


ElContact.propTypes = {
    cont: PropTypes.instanceOf(Contact) //aqui se accede a la clase contact de models
    //este se usa para decirle que los props deben de ser esa manera en si y no como el usuario quiera
};


export default ElContact;
