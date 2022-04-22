import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const index = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Variates products</p>
      </div>
      <div className="products-container">
        {['product 1', 'product 2'].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default index;
