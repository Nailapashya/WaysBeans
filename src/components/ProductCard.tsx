import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { IProduct } from '../types/app'; 

interface IProductProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductProps> = ({ product }) => {

  return (
    <Container maxWidth="lg">

      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2">
                  Price: ${product.price}
                </Typography>
 
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>

              </CardContent>
            </Card>
          </Grid>
      </Grid>

    </Container>
  );
}

export default ProductCard;
