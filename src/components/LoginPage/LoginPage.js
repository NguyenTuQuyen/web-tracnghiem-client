import React, { Component } from 'react';
import "./LoginPage.css";
import {connect} from "react-redux";
import {login} from "../../actions";

class LoginPage extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            username: "",
            code: "",
            submitted: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted : true
        });
        const {username, code} = this.state;
        this.props.login(username,code);
    }
    handleChange = (event) => {
const {name,value} = event.target;
this.setState({
    [name] : value
});
    }
    render() {
        const {username, code, submitted} = this.state;
        const {isLoginPending,isLoginError} = this.props;
        const {examName} = this.props;
        return (
            <div className="container ">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>

                        <form onSubmit={this.handleSubmit} method="POST" role="form">
                            <legend>{examName}</legend>

                            <div className="form-group">
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label >Tên đăng nhập</label>
                                <input value={username} onChange={this.handleChange} type="text" className="form-control" name="username" placeholder="Nhập tên đăng nhập" />
                                {submitted &&!username &&
                            <div className="help-block">Vui lòng nhập tên đăng nhập</div>
                        }
                            </div>
                            </div>
                            <div className="form-group">
                            <div className={'form-group' + (submitted && !code ? ' has-error' : '')}>
                                <label >Code</label>
                                <input
                                value={code} onChange={this.handleChange} type="password" className="form-control" name="code" placeholder="Nhập mã code" />
                                {submitted && !code &&
                            <div className="help-block">Vui lòng nhập Code</div>
                        }
                            </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Đăng nhập</button>
                            {isLoginPending && <div> Đang đăng nhập...</div>}
                            {isLoginError && <div >{isLoginError.message}</div>}
                        </form>

                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login:(username, code) => dispatch
        (login(username, code))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);