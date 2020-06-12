import React from 'react';

function Search ({handleInput, search}) {
    return(
       <section className="searchbox-wrapper">
           <input 
           type="text"
           placeholder="Search For A Movie"
           className="searchbox"
           onChange={handleInput}
           onKeyPress={search}           
           />
       </section>
    )
}

export default Search;