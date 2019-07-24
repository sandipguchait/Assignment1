
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Container } from 'reactstrap';
import ProductList from './ProductList';
import OrderFilter from './OrderFilter';
import Cart from './Cart';
import Size from './Size';



const URL = 'https://react-shopping-cart-67954.firebaseio.com/products.json';

class ProductPage extends Component {
    state = {
        products:[],
        orderBy: '',
        updatedProducts: [],
        cartOrder: []
    }

    componentDidMount(){
        axios.get(URL)
        .then((res) => this.setState({ products: res.data.products}))
    }


    // Price Low to High
    priceLowToHigh = () => {
        const { products } = this.state;
        const sortedProducts = products.length > 0 && 
        products.sort((a,b) => a.price > b.price ? 1 : b.price > a.price ? -1 : 0)
        
        this.setState({ updatedProducts: sortedProducts});
    }

    //price High To Low 
    priceHighToLow = () => {
        const { products } = this.state;
        const sortedProducts = products.length > 0 && 
        products.sort((a,b) => a.price > b.price ? -1 : b.price > a.price ? 1 : 0)

        this.setState({ updatedProducts: sortedProducts });
    };

    //AddtoCart items
    addtoCart = (product) => {
        const {cartOrder} = this.state;
        const alreadyInCart = cartOrder.findIndex(item => item.id === product.id)

        if( alreadyInCart === -1 ){
            const updateItems = cartOrder.concat({
                ...product,
                quantity: 1
            })
            this.setState({ cartOrder: updateItems})
        } else {
            const updatedItems = [...cartOrder];
            updatedItems[alreadyInCart].quantity += 1;
            this.setState({ cartOrder: updatedItems })
        }

    }

    sizeChange = (value) => {
        const { products } = this.state;
        if(value) {
            const result = products.filter(product => (
             product.availableSizes[0].toLowerCase().includes(value.toLowerCase())
            ))
            this.setState({ updatedProducts : result})
       }
    }
 

    render() {
        const { products , cartOrder, updatedProducts } = this.state;
        return (
            <div className="main">
                <div className="maintemplate">
                    <Cart cartOrder={cartOrder}/>
                    <Size sizeChange={this.sizeChange}/>
                    <OrderFilter priceLowToHigh={this.priceLowToHigh} priceHighToLow={this.priceHighToLow}/> 
                    <Container className="grid">    
                         {updatedProducts.length > 0 ? updatedProducts.map(product => (
                            <ProductList product={product} key={product.id} addtoCart={this.addtoCart}/>
                        )) : (products.length > 0 && products.map(product => (
                            <ProductList product={product} key={product.id} addtoCart={this.addtoCart}/>
                        )))}
                    </Container>
                </div>
            </div>
        )
    }
}

export default ProductPage;