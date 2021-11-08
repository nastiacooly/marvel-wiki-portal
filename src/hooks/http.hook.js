import {useState, useCallback} from 'react';

const useHttp = (initialLoadedState = false) => {
    /**
     * Custom hook for http-requests.
     * Returns method to get data from url and to set corresponding 'loaded' and 'error' states.
     * Also returns state values and clearError method.
     */
    const [loaded, setLoaded] = useState(initialLoadedState);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    
    const request = useCallback( async (url, method="GET", body=null, headers={'Content-type': 'application/json'}) => {
        setLoaded(false);
        setError(false);
        setNewItemsLoading(true);

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            setLoaded(true);
            setError(false);
            setNewItemsLoading(false);
            return data;

        } catch(e) {
            setLoaded(true);
            setError(true);
            setNewItemsLoading(false);
            setErrorMessage("Something went wrong. Please try again later.");
            throw(e);
        }

    }, []);

    const clearError = useCallback(() => {
        setError(false);
        setErrorMessage('');
    }, []);

    return {loaded, error, errorMessage, newItemsLoading, request, clearError};

}

export default useHttp;