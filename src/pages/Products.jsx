import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard02 from '../components/cards/ProductCard02';
import SearchBar from '../components/SearchBar';

let app_url = 'http://localhost:8000';
const Products = () => {
  let [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [items, setItems] = useState(null);
  const [qParams, setQParams] = useState({
    category_id: '',
    search: '',
    order_by: 'name',
    order: 'asc'
  });

  useEffect(() => {
    if (id) {
      setQParams({ ...qParams, category_id: id });
    }
  }, [id]);

  useEffect(() => {
    if (qParams.category_id) {
      getItems();
    }
  }, [qParams]);

  const getItems = () => {
    setIsLoading(true);
    axios.get(`${app_url}/api/getproducts`, { params: qParams })
      .then(res => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className=''>
      <div className="px-4">
        <SearchBar />
      </div>

      {items.total && items.total > 0 ? (
        <div className="grid grid-cols-2 gap-4 p-4">
          {items.data.map((product, i) => <ProductCard02 key={i} product={product} app_url={app_url} />)}
        </div>
      ) : (
        <span>No item found</span>
      )}
    </div>
  )
}
export default Products