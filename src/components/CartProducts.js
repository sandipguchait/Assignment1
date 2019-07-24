import React, { Component } from 'react'
import { Card, CardText } from 'reactstrap';

class CartProducts extends Component {
    render() {
        const {cartOrder} = this.props;

          const calculatePrice = product => {
            return `${product.reduce((total, item ) => total + item.quantity * item.price, 0)
            .toFixed(2)
            }`
        }

        return (
            <div >
                {cartOrder.length > 0 && 
                    cartOrder.map(order => (
                        <Card>
                            <CardText>Name: {order.title}</CardText>
                            <hr/>
                            <CardText>Price: ${order.price* order.quantity}</CardText>
                            <CardText>Quantity:  {order.quantity}</CardText>
                        </Card>
                    ))
                }
                <CardText style={{ display: 'flex', flexDirection: 'row-reverse'}}>Total: {calculatePrice(cartOrder)}</CardText>
            </div>
        )
    }
}

export default CartProducts;