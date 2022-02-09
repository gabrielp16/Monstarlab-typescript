import React from "react";
import './Searchbox.scss'

interface IProps {
    value?: string;
    setSearch: Function;
}

const Searchbox: React.FC<IProps> = (props): JSX.Element => {
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