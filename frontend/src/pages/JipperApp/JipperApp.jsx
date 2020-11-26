import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { loadContacts, setFilter } from '../../actions/ContactActions'
import { setUser } from '../../actions/UserActions'
import { userService } from '../../services/userService.js'
import './JipperApp.scss'

class _JipperApp extends Component {

    state = {
        user: null,
    }

    componentDidMount() {
        this.props.setUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
    }

    render() {
        const {user} = this.props
        if (!user) return <div>Loading....</div>
        return (
            <section>
                <div className="home-hero">
                    
                </div>
                <h1>Welcome</h1>
            </section>
        )
    }
}

// gets the global state and puts it in the props of the component
function mapStateProps(state) {
    return {
        user: state.UserReducer.user
    }
}
// Takes the action dispatchers from the actions file and puts them inside the component's props
const mapDispatchToProps = {
    setUser
}
// Connect is used to tap into the store, without it we have no access to the store from the component
export const JipperApp = connect(mapStateProps, mapDispatchToProps)(_JipperApp)
