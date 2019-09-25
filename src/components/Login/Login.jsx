import React from 'react'
import './Login.scss'
import { Paper, TextField, Button } from '../';


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            loading: true
        }
    }

    render() {
        const { loading } = this.state;
        return (
            <Paper
                noPadding
                maxWidth={800}>
                {loading
                    && <i
                        className="fas fa-spinner fa-pulse"
                        style={{ color: 'white', fontSize:'1.5rem', position: 'absolute', top: '24px', left: '24px', zIndex: 500 }}></i>}
                <div className="row" style={{ height: 500 }}>
                    <div className="col-sm-12 col-md-6 h-sm-50 h-md-100">
                        <div
                            className='d-flex flex-column justify-content-center align-items-center h-100'
                            style={{ background: 'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-903ea3cb.jpg) center center', backgroundSize: 'cover' }}>
                            <h1 style={{ color: 'white', fontWeight: '700' }}>KTU KYS</h1>
                            <img src="http://www.ktu.edu.tr/images/logo/Logo_KTU_en.png" alt="logo"
                                style={{ width: '10rem', height: '10rem' }} />
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 h-sm-50 h-md-100">
                        <form className="p-4 d-flex flex-column justify-content-center h-100">
                            <TextField
                                type='text'
                                labelText='Username' />
                            <TextField
                                type='password'
                                labelText='Password' />
                            <Button primary block onClick={() => alert('Alert')}>LOGIN</Button>
                        </form>
                    </div>
                </div>
            </Paper>
        )
    }
}

export default Login
