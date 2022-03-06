import React, { useState, useEffect } from "react";
import store from "./redux/store";
import axios from "axios";

import Header from "./components/Header";
import Description from "./components/Description";
import ListsBlock from "./components/ListsBlock";
import Introduction from "./components/Introduction";
import RegisterForm from "./components/RegisterForm";

import LoginForm from "./components/LoginForm";

function App() {
    const state = store.getState();

    useEffect(() => {
        const checkUserByToken = async () => {
            try {
                const userState = await axios({
                    method: "POST",
                    url: `${URL}/auth/me`,
                    // withCredentials: true, //axios默認不帶cookie, 此參數為是否攜帶cookie
                });
                store.dispatch({
                    type: "SET_WEBINAR_LIST",
                    data: userState.data,
                });
            } catch (error) {
                console.log("App :", error);
            }
        };
        checkUserByToken();
    }, []);

    return (
        <div className="App">
            {state.showLoginForm && <LoginForm />}
            <Header />
            <Description />
            <ListsBlock />
            <Introduction />
            <RegisterForm />
        </div>
    );
}

export default App;
