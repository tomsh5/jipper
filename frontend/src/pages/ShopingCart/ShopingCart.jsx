import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderService } from "../../services/orderService"
import { loadOrder } from '../../actions/OrderActions'
import { ProductList } from '../../cmps/ProductList/ProductList.jsx'
import './ShopingCart.scss'


class _ShopingCart extends Component {

    state = {
        products: []
    }

    async componentDidMount() {
        // this.props.loadOrder()
        // console.log(this.props);
        const products = await orderService.getOrder()
        await console.log(products);
        this.setState({ products })
        this.calcPrice()
    }

    //  async loadOrder() {
    //     const order = await orderService.getOrder()
    //     this.setState({ order })
    // }

    calcPrice = () => {
        const { products } = this.state
        const acc = 0;
        const prices = products.map(product => product.price)
        const reducer = (accumulator, item) => {
            return accumulator + item;
        };
        const total = prices.reduce(reducer, acc)
        console.log(total);
        return total
    }

    deleteItem = async (itemId) => {
        await orderService.removeItemFromCart(itemId)
        const cart = await orderService.getOrder()
        // this.props.removeFromCart()
        this.setState({ products: cart })
    }


    render() {
        const deliveryPrice = 30;
        const total = this.calcPrice()
        const { products } = this.state
        if (!products) return <div>Loading....</div>

        return (
            <section className="shopingCart main-layout">
                <div className="cart-container">
                    <div className="products-container">
                        <h2>My Bag</h2>
                        <ProductList deleteItem={this.deleteItem} listMode="cartMode" products={products} />
                    </div>
                    <div className="total-container">
                        <h2>Total</h2>
                        <ul>
                            <li><span>Sub-total</span>
                                {total} NIS
                    </li>
                            <li>
                                <span>Delivery</span>
                                {deliveryPrice} NIS
                    </li>
                            <li>
                                <span>Total</span>
                                {total + deliveryPrice} NIS
                    </li>
                        </ul>
                        <button>Checkout</button>
                    </div>
                </div>
            </section>
        )
    }
}
// gets the global state and puts it in the props of the component
function mapStateProps(state) {
    return {
        order: state.OrderReducer.order
    }

}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    loadOrder
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ShopingCart = connect(mapStateProps, mapDispatchToProps)(_ShopingCart)