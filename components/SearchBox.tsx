import React, { ChangeEvent, useContext } from 'react';
import SearchContext from '../context/SearchContext';
import Input from "./Input";

const SearchBox = () => {
    const { search, setSearch } = useContext(SearchContext);

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(() => event.target.value);
    };

    return (
        <div>
            <Input type="text" placeholder="Search..." value={search} onChange={onSearch} />
        </div>
    );
};

export default SearchBox;
