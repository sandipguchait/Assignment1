import React, { Component } from 'react';
import { Card, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import '../App.css';

 class ProductList extends Component {
  
    render() {
        const {product, addtoCart} = this.props;
        return (
            <Card>
                <img width="100%" src="https://via.placeholder.com/440x640" alt="Card image cap" />
                <CardBody>
                <CardText>{product.title}</CardText>
                <CardTitle><h4>{product.currencyFormat}{product.price}</h4></CardTitle>
                <hr/>
                <Button color="primary" block onClick={() => addtoCart(product)}>Add to Cart</Button>
                </CardBody>
            </Card>
        )
    }
}

export default ProductList;