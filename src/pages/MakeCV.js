import React, { Component } from 'react'
//components
import Header from './components/Header'
import InfoForm from '../components/InfoForm'
class MakeCV extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            info: {
                public: {
                    firstName: '',
                    lastName: '',
                    jobProfile: ''
                },
                private: {
                    contact: [],
                    address: '',
                    codeRegion: '',
                    cellphone: '',
                }
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }
    render () {
        return (
            <React.Fragment>
                <Header name="Make CV" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <InfoForm onSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MakeCV