import React from 'react'
import { connect } from 'react-redux'

function App(){
    return <div>
        <a href="/order.html">dingdan</a>,
        <a href="/query.html">chaxun</a>,
        <a href="/ticket.html">ticket</a>,
    </div>
}

export default connect(
    function mapStateToProps(state){
        return state
    },
    function mapDispatchToProps(dispatch){
        return { dispatch }
    },
)(App)