import React from 'react';
import './Search.css';
import JSONDATA from '../../../../Aboutus/services.json';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="App">
     <FontAwesomeIcon className="m-1 text-primary" icon={faSearch} />  <input className='mb-3 border border-3 p-1 border-primary rounded-pill' type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} />
        {JSONDATA.filter((val) => {
          if (searchTerm == ""){
            return val
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className='user' key={key}>
             <p className='text-primary'>{val.name}</p>
             {/* <p>{val.offer}</p>
             <p>{val.description}</p>  */}
            </div>
          );
        })}
      </div>
    );
};

export default Search;