import React, {useContext} from 'react';
import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
    SuggestionBar, // an optional UI component that displays trending searches and channel / username results
    SearchBarComponent
} from '@giphy/react-components'



const SearchCon = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    return (
        <>
            <SearchBarComponent />
            <SuggestionBar />
            {/** 
                key will recreate the component, 
                this is important for when you change fetchGifs 
                e.g. changing from search term dogs to cats or type gifs to stickers
                you want to restart the gifs from the beginning and changing a component's key does that 
            **/}
            <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} />
        </>
    )
}

export default SearchCon;
