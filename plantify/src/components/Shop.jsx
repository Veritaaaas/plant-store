import { useParams } from 'react-router-dom';

import Navbar from './Navbar';
import Shop_Header from './Shop_Header';
import Product_Grid from './Product-Grid';
import product_data from '../assets/product_data';

function Shop() {

  const { natural_products, bonsai_products, flower_products } = product_data();

  const { product_display } = useParams(natural_products);

  return (
    <>
        <Navbar />
        <Shop_Header />
        <Product_Grid products={product_display === 'natural' ? natural_products : product_display === 'bonsai' ? 
        bonsai_products : flower_products} product_display={product_display}/>


    </>
  )
}

export default Shop;