import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCartProducts } from '../../actions/ProductActions'
import './ShopingCart.scss'


class _ShopingCart extends Component {

    componentDidMount() {
        this.props.loadCartProducts()
     }

     render() {
        const {cartProducts} = this.props
        if (cartProducts) return <div>Loading....</div>

        return (
            <div className="main-layout">
               {cartProducts}
            </div>
        )
    }
}

// gets the global state and puts it in the props of the component
function mapStateProps(state) {
    return {
        products: state.ProductReducer.products
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    loadCartProducts
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ShopingCart = connect(mapStateProps, mapDispatchToProps)(_ShopingCart)