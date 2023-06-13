import search from './icon-search.svg'
import { useState } from 'react';
const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const sendData = () => {
    if (searchTerm.trim() !== '') {
      props.sendword(searchTerm);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendData();
    }
  };
    return ( 
    <div className="searchBar">
        <input type="search" className='search'name='search' onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown} value={searchTerm}></input>
        <img src={search}   onClick={sendData} alt="search" className='searchicon'></img>
    </div> );
}
 
export default SearchBar;