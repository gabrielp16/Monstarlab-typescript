import React from "react";
import './Searchbox.scss'
import { ISearch } from '../../models/ISearch'

const Searchbox: React.FC<ISearch> = (props): JSX.Element => {
    const { value, setSearch } = props;

    return (
        <div className="searchbox">
            <input
                value={value}
                placeholder="Search a movie"
                onChange={(event) => setSearch(event.target.value)}
            ></input>
        </div>
    );
};

export default Searchbox;