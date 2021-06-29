import React from 'react';

const SearchBox = ({searchfields, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                type='search'
                className='pa3 ba b--yellow bg-lightest-blue'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;