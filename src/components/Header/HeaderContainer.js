import Header from './Header'
import { connect } from 'react-redux'
import { Component } from 'react'


class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, null)(HeaderContainer)