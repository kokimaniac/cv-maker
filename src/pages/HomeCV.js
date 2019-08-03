import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//component
import Header from './components/Header'
//pages


class HomeCV extends Component {
    render() {
        return (
            <React.Fragment>
                <Header name="Home CV" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="display-4">
                                This is an experimental Curriculum Vitae maker. <br />
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link className="btn btn-primary" to="/make">Make CV</Link>
                            <Link className="btn btn-success" to="/show">Show CV</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HomeCV