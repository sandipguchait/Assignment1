import React, { Component } from 'react'
import CartProducts from './CartProducts';


 class Cart extends Component {

    state = {
        open: false
    };

    handleChange = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    };

    

    render() {
        const { cartOrder } = this.props;
        const { open } = this.state;
        return (
            <>
                <div onClick={this.handleChange} style={{ cursor: 'pointer', marginLeft: "70%" }}>
                    cart { open ? <>❌</> : <>🛒{cartOrder.length > 0 ? <>{cartOrder.length}</> : null }</>}
                </div>
                <div>
                    {open && cartOrder.length > 0 ? <CartProducts cartOrder={cartOrder}/> : null}
                </div>
            </>
        )
    }
}

export default Cart;
