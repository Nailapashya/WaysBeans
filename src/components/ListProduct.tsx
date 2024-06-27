import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from './ProductCard'; 
import { IProduct } from '../types/app'; 

const ListProduct: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    
    const mockProducts: IProduct[] = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListProduct;
