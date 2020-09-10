import { useState, useEffect } from 'react';

const catalogData = ['2x2 plate', '1x1 brick', '3x1 brick']
    .map((x, i) => {
        return {id: i, name: x}
    });

function useCatalog() {
    const [catalog, setCatalog] = useState(null);

    useEffect(() => setCatalog(catalogData), []);

    return catalog;
}

export default useCatalog;