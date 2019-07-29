import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//component
import Header from './components/Header'
class HomeCV extends Component {
    render() {
        return (
            <React.Fragment>
                <Header name="Home CV" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="display-4">
                                This is an experimental CV maker. <br />
                                If you think this CV maker can get better fork it! <br />
                                Otherwise try this, give it a chance!
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