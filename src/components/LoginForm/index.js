import { useState, useEffect, Fragment } from "react";
import store from "../../redux/store";
import axios from "axios";
import { setCookie } from "../../utils/cookieMath";

import { URL } from "../../source.config";
import { Cover, LoginBlock, LoginButton, CancelBtn, ErrorText } from "./styles";

function LoginForm() {
    const state = store.getState();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [submitError, setSubmitError] = useState(false);
    const [logining, setLogining] = useState(false);

    const clickCancelBtn = () => {
        store.dispatch(
            store.dispatch({ type: "SET_SHOW_LOGIN_FORM", data: false })
        );
    };

    const onSubmit = async () => {
        setLogining(true);
        setSubmitError(false);

        const url = `${URL}/auth/email/login`;
        const data = {
            email,
            password,
        };

        fetch(url, {
            body: JSON.stringify(data),
            method: "POST",
        })
            .then((response) => response.json())
            .then((userIinfo) => {
                store.dispatch({
                    typr: "SET_USER_INFOT",
                    data: userIinfo.user,
                });
                store.dispatch({ typr: "LOGIN_STAGE", data: true });
                setCookie("token", userIinfo.token, 3600 * 24);
                setSubmitError(false);
            })
            .catch((error) => {
                console.log("LoginForm :", error);
                setSubmitError(true);
            }); // 輸出成 json

        setLogining(false);
    };

    return (
        <Cover>
            <LoginBlock>
                {logining ? (
                    <span>Logining please waite</span>
                ) : (
                    <Fragment>
                        <CancelBtn onClick={clickCancelBtn} />
                        <label htmlFor="loginEmail">Email</label>
                        <input
                            id="loginEmail"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />
                        {submitError && (
                            <ErrorText>error! please try again </ErrorText>
                        )}
                        <LoginButton onClick={onSubmit}>Login</LoginButton>
                    </Fragment>
                )}
            </LoginBlock>
        </Cover>
    );
}

export default LoginForm;
