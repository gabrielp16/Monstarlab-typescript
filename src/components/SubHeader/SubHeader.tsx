import React from 'react';
import './SubHeader.scss';
import { ITitle } from '../../models/ITitle';

const SubHeader: React.FC<ITitle> = (props): JSX.Element => {
    const { title = 'Title' } = props;
    return (
        <div className='subheader'>
            <h2>{title}</h2>
        </div>
    );
};

export default SubHeader;