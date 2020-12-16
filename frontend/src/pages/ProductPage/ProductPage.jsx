import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProducts, setFilter } from '../../actions/ProductActions'
import { productService } from '../../services/productService.js'
import { ProductList } from '../../cmps/ProductList/ProductList.jsx'
import {ProductFilter} from '../../cmps/ProductFilter/ProductFilter.jsx'

class _ProductPage extends Component {

    state = {
        products: null,
        filterBy: null
    }

    componentDidMount() {
       this.props.loadProducts()
       this.props.setFilter()
       console.log(this.props.products);

    }

    onChangeFilter = (filterBy) => {
        this.props.setFilter(filterBy)
        this.props.loadProducts()
    }


    render() {
        const {products} = this.props
        if (!products) return <div>Loading....</div>
        console.log(this.props.products);
        return (
            <div className="main-layout">
                <ProductFilter onChangeFilter={ this.onChangeFilter } />
               <ProductList listMode="customerMode" products={products}/>
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
    loadProducts,
    setFilter
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ProductPage = connect(mapStateProps, mapDispatchToProps)(_ProductPage)
