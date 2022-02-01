import React from 'react';
import SearchCon from './SearchCon'

//search api goes here
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from '@giphy/react-components'

// the search experience consists of the manager and its child components that use SearchContext
const SearchExperience = () => (
  <SearchContextManager apiKey={'igaRFIMGiLr2rgB8zvX69GQENnBC80VG'}>
      <SearchCon />
  </SearchContextManager>
)

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern


// function Search() {
//   return (
//   <div> 
//     <input type="search">Search</input>
//     <button>Go</button>
//   </div>
//   );
// }

// export default Search