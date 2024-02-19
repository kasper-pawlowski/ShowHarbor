import { createContext, useContext, useEffect, useState } from 'react';

const dimensionsContext = createContext();

export function DimenstionsProvider({ children }) {
    const [navbarDimensions, setNavbarDimensions] = useState();
    const [headerDimensions, setHeaderDimensions] = useState();
    const [searchInputDimensions, setSearchInputDimensions] = useState();
    const [switcherDimensions, setSwitcherDimensions] = useState();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        console.log('headerDimensions: ' + headerDimensions?.height);
        console.log('searchInputDimensions: ' + searchInputDimensions?.height);
        console.log('switcherDimensions: ' + switcherDimensions?.height);
    }, [headerDimensions]);

    return (
        <dimensionsContext.Provider
            value={{
                navbarDimensions,
                setNavbarDimensions,
                headerDimensions,
                setHeaderDimensions,
                searchValue,
                setSearchValue,
                searchInputDimensions,
                setSearchInputDimensions,
                switcherDimensions,
                setSwitcherDimensions,
            }}
        >
            {children}
        </dimensionsContext.Provider>
    );
}

export function useDimensions() {
    return useContext(dimensionsContext);
}
