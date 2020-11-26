import React from 'react'
import './ProductPreview.scss'
import { Link } from 'react-router-dom'

export function ProductPreview(props) {
    const {name, _id} = props.product
    return (
        <div className="product-preview flex column align-center">
            <Link className="flex" to={`/product/${_id}`}>
             <img width="200" height="200" src={`https://i.imgur.com/sl4f4Mr.jpg`} alt="img"></img>
             </Link>
             <div className="sun-name">
             Mentsh Sun
             </div>
        </div>
    )
}
