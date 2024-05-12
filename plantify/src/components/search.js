import product_data from "../assets/product_data";

function search(name) {
    const { natural_products, bonsai_products, flower_products } = product_data();

    const products = natural_products.concat(bonsai_products, flower_products);

    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

export default search;