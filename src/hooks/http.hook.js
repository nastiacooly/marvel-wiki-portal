import {useState, useCallback} from 'react';

const useHttp = () => {
    /**
     * Custom hook for http-requests.
     * Returns method to get data from url and to set corresponding 'process' state.
     * Also returns state values and clearError method.
     */
    const [process, setProcess] = useState('idle');
    
    const request = useCallback( async (url, method="GET", body=null, headers={'Content-type': 'application/json'}) => {
        setProcess('loading');

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;

        } catch(e) {
            setProcess('failure');
            throw(e);
        }

    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return {
            process, 
            setProcess,
            request, 
            clearError
        };

}

export default useHttp;