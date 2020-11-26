import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/ProductActions'
import { productService } from '../../services/productService.js'
import './ProductDetails.scss'
import { Link } from 'react-router-dom'


export class _ProductDetails extends Component {
    state = {
        product: null,
        productToCart: null
    }


    async componentDidMount() {
        const { id } = this.props.match.params
        const product = await productService.getProductById(id)
        this.setState({ product })
        this.setState({productToCart: this.state.product})
    }

    onDeleteProduct = async () => {
        await productService.deleteProduct(this.state.product._id)
        this.props.history.push('/')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ productToCart }) => ({ productToCart: { ...productToCart, [field]: value } }))
        console.log(this.state.productToCart);
    }

    onEdit = (ev) => {
        const { _id } = this.state.product
        ev.stopPropagation()
        this.props.history.push(`/product/edit/${_id}`)
    }

    onColorSelect = (ev) => {
        const val = document.getElementById("color").value;
        console.log(val);
        this.setState({
            productToCart: val
          })
        // this.setState(productToCart.size = val)
        console.log(this.state.productToCart);
    }

    OnAddToCart = (ev) => {
        // const productToCart = this.state.productToCart
        this.props.addToCart(this.state.productToCart)
        console.log(this.state.productToCart);
    }

    render() {
        if (!this.state.product) return <div>Loading...</div>
        const { name, price, details } = this.state.product
        const sizes = details.size.map((size) => <option key={size}>{size}</option>);
        const colors = details.color.map((color) => <option value={color} key={color}>{color}</option>);
        return (
            <div className="product-details main-layout">
                <Link  to={`/product`}>Back to collection</Link>
                <section className="flex">
                    {/* <div className="flex space-between"> */}
                    {/* <i onClick={this.onDeleteProduct} className="far fa-trash-alt"></i> */}
                    {/* </div> */}
                    <div className="product-imges">
                        <img width="500" height="500" src={details.imgs.img1} alt="img"></img>
                    </div>
                    <div className="product-info">
                        <h2>{name}</h2>
                        <span className="price">{price} NIS</span>
                        <h3>Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sunt, 
                            maiores beatae cum quam nostrum ab iure temporibus, incidunt eveniet officiis exercitationem 
                            explicabo nam dignissimos velit ducimus impedit aliquid cupiditate!
                        </p>
                        <div>
                        <select onChange={this.handleChange} name="size" id="size">
                            <option>size</option>
                            {sizes}
                        </select>
                        <select onChange={this.handleChange} className="select-color" name="color" id="color">
                            <option>color</option>
                            {colors}
                        </select>
                       
                        <button onClick={this.OnAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                    {/* <div className="flex justify-end">
                <i onClick={this.onEdit} className="far fa-edit"></i>
                </div> */}
                </section>
            </div>
        )
    }
}

// gets the global state and puts it in the props of the component
function mapStateProps(state) {
    return {
        cartProducts: state.ProductReducer.cartProducts
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    addToCart
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ProductDetails = connect(mapStateProps, mapDispatchToProps)(_ProductDetails)

