import { useParams } from 'react-router-dom';

import Navbar from './Navbar';
import Shop_Header from './Shop_Header';
import Product_Grid from './Product-Grid';

function Shop() {

    const natural_products = [
    {
      name: "Aloe Vera",
      price: "₱ 600.00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/341a7934fe7f05a0e371c9a3cfa6c894d31684bbb7ebbf89ae6a30729ca1dc8e?apiKey=8b5c844c9e604efba227618c0cf9b444&",
    },
    {
      name: "Snake Plant",
      price: "₱ 500.00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ade7df04c4f248816ce564916dcb69952284780bf7b0a06b45c0e8bee57a282d?apiKey=8b5c844c9e604efba227618c0cf9b444&",
    },
    {
      name: "Peace Lily",
      price: "₱ 400.00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b7e6f53b693ce4afcfb5f762296eeefeb399ebf6eb8d12f1c766567ae4440d6?apiKey=8b5c844c9e604efba227618c0cf9b444&",
    },
    {
      name: "Fiddle Plant",
      price: "₱ 550.00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ed2f89dacab539ab3c6d41a275e215d4b8dc92111950475840a96ad488fd7e5?apiKey=8b5c844c9e604efba227618c0cf9b444&",
    },
    {
      name: "ZZ Plant",
      price: "₱ 700.00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a94323424ae64548069d302c03c0b6c4398b886d842355cd114c9a4deaf6a67a?apiKey=8b5c844c9e604efba227618c0cf9b444&",
    },
    {
      name: "Rubber Plant",
      price: "₱ 800.00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4000ac0634432b4622b4bf0bf02fca4f4937500f03df462f27b1b042063bbfa3?apiKey=8b5c844c9e604efba227618c0cf9b444&",
    },
  ];

  const bonsai_products = [
    {
      name: "Jade Tree",
      price: "₱ 800.00",
      image: "https://images.unsplash.com/photo-1621552330975-f5f9c85dc9c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      name: "Japanese White Pine",
      price: "₱ 1,200.00",
      image: "https://bonsaimirai.com/sites/default/files/styles/_r_square_large_desktop_1x/public/images/species/species-photos/japanese-white-pine-bonsai-care.jpeg?itok=PCimmGwP"
    },
    {
      name: "Japanese Red Maple",
      price: "₱ 1,500.00",
      image: "https://m.media-amazon.com/images/I/71kcxe64lOL._AC_SL1500_.jpg"
    },
    {
      name: "Chinese Juniper",
      price: "₱ 1,000.00",
      image: "https://www.devonbonsai.co.uk/wp-content/uploads/2023/06/PXL_20230624_1219576612-scaled-e1687609857181.jpg"
    },
    {
      name: "Chinese Elm",
      price: "₱ 1,000.00",
      image: "https://i.pinimg.com/originals/48/79/b0/4879b0dc190c451b63966ca67680afc0.jpg"
    },
    {
      name: "Trident Maple",
      price: "₱ 1,200.00",
      image: "https://bonsaimirai.com/sites/default/files/images/species/species-featured-photo/trident-maple-bonsai-1.jpeg"
    }
  ];

  const flower_products = [
    {
      name: "Orchids",
      price: "₱ 600.00",
      image: "https://images.unsplash.com/photo-1616373002323-5eb54fc19dbc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Azalea",
      price: "₱ 800.00",
      image: "https://h2.commercev3.net/cdn.brecksgifts.com/images/800/05489A.jpg"
    },
    {
      name: "African Violet",
      price: "₱ 900.00",
      image: "https://hanselngretel.com/cdn/shop/products/9_ddb29a62-e59a-454f-9e1f-0a9fc8cb12ba_800x.jpg?v=1589929724"
    }
  ];

  const { product_display } = useParams(natural_products);

  return (
    <>
        <Navbar />
        <Shop_Header />
        <Product_Grid products={product_display === 'natural' ? natural_products : product_display === 'bonsai' ? bonsai_products : flower_products} />
    </>
  );
}

export default Shop;