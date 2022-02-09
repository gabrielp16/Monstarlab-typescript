import React from 'react';
import './Header.scss';

interface IProps {
    title?: string;
}

const Header: React.FC<IProps> = (props): JSX.Element => {
    const { title = 'Movie title' } = props;

    return (
        <div className='header'>
            <h1>{title}</h1>
        </div>
    );
};

export default Header;