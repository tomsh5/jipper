import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderService } from "../../services/orderService"
import './ProductPreview.scss'
import { Link } from 'react-router-dom'

class _ProductPreview extends Component {

    generateBtns = () => {
        switch (this.props.listMode) {
            case "cartMode":
                return (<div>
                    <button onClick={() => this.handleDelete(this.props.product._id)}>X</button>
                </div>
                )
            case "wishListMode":
                return (<div>
                    <button onClick={() => this.handleDelete(this.props.product._id)}>X</button>
                    <button onClick={() => this.handleAddToCart(this.props.product)}>Add To Cart</button>
                </div>
                )

            case "adminMode":
                return (
                    <div>
                        <button onClick={() => this.handleDelete(this.props.product._id)}>delete</button>
                        <button onClick={() => this.handleEdit(this.props.product)}>edit</button>
                    </div>
                )
            case "customerMode":
                return (
                    <div>
                    </div>
                )

            default:
                break;
        }
    }

    handleDelete = (productId) => {
        this.props.deleteItem(productId)
    }

    render() {

        const { name, imgs, _id } = this.props.product

        return (
            <div className="product-preview flex column align-center">
                <Link className="flex" to={`/product/${_id}`}>
                    <img width="200" height="200" src={imgs.img1} alt="img"></img>
                </Link>
                <div className="sun-name">
                    {name}
                </div>
                {this.generateBtns()}
            </div>
        )

    }

}

// gets the global state and puts it in the props of the component
function mapStateProps(state) {
    return {
        
    }

}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const ProductPreview= connect(mapStateProps, mapDispatchToProps)(_ProductPreview)