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
