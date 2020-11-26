import React, { useState } from 'react';
import { ProductPreview } from '../ProductPreview/ProductPreview.jsx'
import './ProductList.scss'

export function ProductList(props) {


    return (
        <div className="product-list flex wrap justify-center">
            {props.products.map(product =>
                <ProductPreview key={product._id} product={product} />)}
        </div>
    )
}

