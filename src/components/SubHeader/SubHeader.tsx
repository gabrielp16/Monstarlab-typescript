import React from 'react';
import './SubHeader.scss';

interface IProps {
    title?: string;
}

const SubHeader: React.FC<IProps> = (props): JSX.Element => {
    const { title = 'Title' } = props;
    return (
        <div className='subheader'>
            <h2>{title}</h2>
        </div>
    );
};

export default SubHeader;