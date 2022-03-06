import React from "react";
import store from "../../redux/store";
import axios from "axios";

import {
    LoginBtn,
    LogoutBtn,
    HeaderBlock,
    Content,
    LogoImg,
    Navigator,
} from "./styles";

function Header() {
    const state = store.getState();

    //點擊登入
    const clickLogin = () => {
        store.dispatch({ type: "SET_SHOW_LOGIN_FORM", data: true });
    };

    //點擊登出
    const clickLogout = async () => {
        try {
            const userIinfo = await axios({
                method: "POST",
                url: `${URL}/auth/logout`,
                // withCredentials: true, //axios默認不帶cookie, 此參數為是否攜帶cookie
            });
            store.dispatch({ typr: "SET_USER_INFOT", data: userIinfo.data });
            store.dispatch({ typr: "LOGIN_STAGE", data: false });
        } catch (error) {
            console.log("Header :", error);
        }
    };

    return (
        <HeaderBlock>
            <Content>
                <LogoImg
                    src="https://acyhk.com/images/common/logo.svg"
                    alt="logo"
                />
                <Navigator>
                    <div>Why ACY</div>
                    <div>Products</div>
                    <div>Platfroms</div>
                    <div>Education</div>
                    <div>partners</div>
                </Navigator>
                <div className="btn-block">
                    {state.login ? (
                        <LogoutBtn onClick={clickLogout}>Logout</LogoutBtn>
                    ) : (
                        <LoginBtn onClick={clickLogin}>Login</LoginBtn>
                    )}
                </div>
            </Content>
        </HeaderBlock>
    );
}

export default Header;
