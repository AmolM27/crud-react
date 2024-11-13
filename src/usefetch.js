import { useState, useEffect } from 'react';

const Usefetch = (url) => {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setData(data);
            setError(null);
            setIsPending(false);
        })
        .catch((err) =>
        {
            setError(err.message)
            setIsPending(false);
        })
    }, [url])
    return { data, isPending, error }
}

export default Usefetch;