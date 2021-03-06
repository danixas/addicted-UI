import { Container } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router";
import Login from './Login'
import Register from "./Register";

import "./styles.scss"

const curr_year = new Date().getFullYear()


const Auth = ({match}) => {
    return (
        <>
        <Container className="position-relative vh-100">
            <div className="auth__card">
                <div className="auth__form">
                    {
                        match.path == "/login" 
                        ? <Login /> 
                        : <Register />
                    }
                    <div className="auth__form_footer">
                        &copy; KTU Addicted {curr_year}
                    </div>
                </div>

                <div className="auth__card_bg">
                    <img src="/img/vacius_stylized.png" alt="vacius face stylized" />
                    <div className="title">
                        <h1>Bet big or go home</h1>
                        <p>Bet virtual money and win <span>mad</span> respect.</p>
                    </div>
                </div>
            </div>
        </Container>
        </>
    );
};

export default Auth;
