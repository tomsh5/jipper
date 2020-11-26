import React, { Component } from 'react'
import './ProductFilter.scss'

export class ProductFilter extends Component {
    state = {
        name: '',
        txt: 'y'
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? + target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    
    render() {
        return (
            <div className="product-filter flex justify-center">
                <label>Search</label>
                <input name="name" type="text" onChange={this.handleChange} />
            </div>
        )
    }
}
