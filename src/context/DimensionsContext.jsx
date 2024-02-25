import { createContext, useContext, useEffect, useState } from 'react';

const dimensionsContext = createContext();

export function DimenstionsProvider({ children }) {
    const [navbarDimensions, setNavbarDimensions] = useState();
    const [headerDimensions, setHeaderDimensions] = useState();
    const [searchInputDimensions, setSearchInputDimensions] = useState();
    const [switcherDimensions, setSwitcherDimensions] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [scrollOffsetY, setScrollOffsetY] = useState(0);

    useEffect(() => {
        console.log('headerDimensions: ' + headerDimensions?.height);
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
                scrollOffsetY,
                setScrollOffsetY,
            }}
        >
            {children}
        </dimensionsContext.Provider>
    );
}

export function useDimensions() {
    return useContext(dimensionsContext);
}
