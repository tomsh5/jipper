import React, { Component } from 'react'
import { productService } from '../../services/productService.js'
import './ProductEdit.scss'

export class ProductEdit extends Component {
    state = {
        product: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const product = id ? await productService.getProductById(id) : await productService.getEmptyProduct()
        this.setState({ product })
    }

    onSaveProduct = async (ev) => {
        ev.preventDefault()
        await productService.saveProduct(this.state.product)
        this.props.history.push('/')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ product }) => ({ product: { ...product, [field]: value } }))
    }

    render() {
        const { product } = this.state
        if (!product) return <div>Loading...</div>

        return (
            <form className="product-edit" onSubmit={this.onSaveProduct}>

                <div className="flex justify-center space-between">
                    <i onClick={() => this.props.history.goBack()} className="fas fa-long-arrow-alt-left"></i>
                </div>

                {(product._id) && <img width="200" height="200" src={`https://robohash.org/${product.name}?set=set5`} alt="img"></img>}
                {(!product._id) && <h2>Add New Product</h2>}
                <div className="flex column">
                    <label>Name</label>
                    <input name="name" value={product.name} type="text" onChange={this.handleChange} placeholder="Type Your Name..." />
                    <label>Email</label>
                    <input name="email" value={product.email} type="text" onChange={this.handleChange} placeholder="Type Your Email..." />
                    <label>Phone</label>
                    <input name="phone" value={product.phone} type="text" onChange={this.handleChange} placeholder="Type Your Phone..." />
                </div>

                <button>Save</button>
            </form>
        )
    }
}
