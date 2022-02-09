import React from "react";
import './Searchbox.scss'
import { ISearch } from '../../models/ISearch'

const Searchbox: React.FC<ISearch> = (props): JSX.Element => {
    const { setSearch } = props;

    return (
        <div className="searchbox">
            <input
                placeholder="Search a movie"
                onChange={(event) => setSearch((event.target.value).trim())}
            ></input>
        </div>
    );
};

export default Searchbox;