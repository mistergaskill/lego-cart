import React, {useContext} from 'react';
import useCatalog from '../hooks/useCatalog';
import { CartContext } from '../contexts/CartContext';
import './Catalog.css'

function CatalogItem(item) {
  const { addItem } = useContext(CartContext);

  return (<div className="catalogItem">
    <button className="catalogItemAdd" onClick={()=> addItem(item)}>Add</button>
    <div className="catalogItemDescription">{item.name}</div>
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
