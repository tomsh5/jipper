import React, { useState } from 'react';
import { ProductPreview } from '../ProductPreview/ProductPreview.jsx'
import './ProductList.scss'

export function ProductList({ products, listMode, deleteItem, editItem, addToCart }) {


    return (
        <div className="product-list flex wrap justify-center">
            {products.map(product =>
                <ProductPreview deleteItem={deleteItem} listMode={listMode} key={product._id} product={product} />)}
        </div>
    )
}

