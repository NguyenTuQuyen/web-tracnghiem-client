import React, { Component } from 'react';
import "./LoginPage.css";
import { connect } from "react-redux";
import { userActions } from "../../actions";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        // reset login status
        this.props.logout();
        this.state = {
            username: "",
            code: "",
            submitted: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        });
        const { username, code } = this.state;
        this.props.login(username, code);
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        const { loginIn } = this.props;
        const { username, code, submitted } = this.state;
        const { examName } = this.props;
        return (

            <div className="container ">
                <div className="main-agile">
                    <div className="content">
                        <h2>Login</h2>
                        <legend>{examName}</legend>
                        <form onSubmit={this.handleSubmit} method="POST"  >
                            {submitted && !username &&
                                <div className="help-block">Vui lòng nhập Tên đăng nhập</div>
                            }
                            <div className="inputs">

                                <i className="fa fa-user" aria-hidden="true"></i>
                                <input value={username} onChange={this.handleChange} type="text" name="username" placeholder="Nhập tên đăng nhập" />
                            </div>

                            {submitted && !code &&
                                <div className="help-block">Vui lòng nhập Code</div>
                            }
                            <div className="inputs">

                                <i className="fa fa-key" aria-hidden="true"></i>
                                <input
                                    value={code} onChange={this.handleChange} type="password" name="code" placeholder="Nhập mã code" />
                            </div>


                            <input className="submit" type="submit" value="LOGIN" />
                            {loginIn &&
                                <img alt="Login..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }



                        </form>
                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    const { loginIn } = state.authenticationReducer;
    return {
        loginIn
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, code) => dispatch(userActions.login(username, code)),
        logout: () => {
            userActions.logout()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);