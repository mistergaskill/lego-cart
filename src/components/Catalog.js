import React, {useContext} from 'react';
import useCatalog from '../hooks/useCatalog';
import { CartContext } from '../contexts/CartContext';

function CatalogItem(item) {
  const { addItem } = useContext(CartContext);

  return (<div>
    {item.name}
    <button onClick={()=> addItem(item)}>Add to cart</button>
  </div>)
}

function Catalog() {
  const catalog = useCatalog();

  return (
    <div>
      <h1>Catalog</h1>
        { catalog && catalog.map(CatalogItem)}
    </div>
  );
}

export default Catalog;
