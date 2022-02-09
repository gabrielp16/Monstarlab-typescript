import React from 'react';
import './Header.scss';
import { ITitle } from '../../models/ITitle';

const Header: React.FC<ITitle> = (props): JSX.Element => {
    const { title = 'Movie title' } = props;

    return (
        <div className='header'>
            <h1>{title}</h1>
        </div>
    );
};

export default Header;