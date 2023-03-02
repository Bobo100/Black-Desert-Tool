import React, { useState } from 'react';
import debounce from 'lodash/debounce';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState(value);

  const delayedOnChange = debounce((value: string) => {
    onChange(value);
  }, 1500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // onChange(event.target.value);
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    delayedOnChange(inputValue);
  };

  return (
    <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="請輸入想找的內容"/>
  );
};

export default Search;
