import React, { useContext } from 'react';
import SearchContext from './SearchContext';
import Input from "./Input";

const SearchBox = () => {
    const { search, setSearch } = useContext(SearchContext);

    const onSearch = e => {
        setSearch(() => e.target.value);
    };

    return (
        <div>
            <Input type="text" placeholder="Search..." value={search} onChange={onSearch} />
        </div>
    );
};

export default SearchBox;
