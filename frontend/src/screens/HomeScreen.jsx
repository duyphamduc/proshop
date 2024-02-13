import React from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlide';

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <div>{isError?.data?.message || isError.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
