import React from 'react';
import {Link} from 'react-router-dom';

const AdminMenu = props => {
    return (
        <div className="list-group">
        <Link to='' className="list-group-item list-group-item-action active">
            Selecione uma Opção </Link>
        <Link to='/admin/portifolio' className="list-group-item list-group-item-action">Portifólio</Link>
        </div>
    );
}

export default AdminMenu;