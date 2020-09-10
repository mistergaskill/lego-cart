import { useState, useEffect } from 'react';

const catalogData = [
    {id: 1, price: 15, name: '2x2 plate'},
    {id: 2, price: 25, name: '1x1 brick'},
    {id: 3, price: 30, name: '3x1 brick'},
];

function useCatalog() {
    const [catalog, setCatalog] = useState(null);

    useEffect(() => setCatalog(catalogData), []);

    return catalog;
}

export default useCatalog;