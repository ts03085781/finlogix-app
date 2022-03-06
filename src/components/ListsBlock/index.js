import { useState, useEffect, useCallback } from "react";
import { URL } from "../../source.config";
import store from "../../redux/store";

import { Block } from "./styles";
import SectionBlock from "../SectionBlock";
import List from "../List";

function ListsBlock() {
    const [page, setPage] = useState(1);
    const per_page = 12;
    const state = store.getState();

    //獲取列表資料
    const getWebinarList = useCallback(async () => {
        try {
            return await fetch(`${URL}/posts?per_page=${per_page}&page=${page}`)
                .then((response) => response.json())
                .then((myJson) => {
                    store.dispatch({ type: "SET_WEBINAR_LIST", data: myJson });
                });
        } catch (error) {
            console.log("ListsBlock : " + error);
        }
    }, [page]);

    const clickRegister = () => {
        if (state.login) {
            document.getElementById("registerForm").scrollIntoView();
        } else {
            store.dispatch({ type: "SET_SHOW_LOGIN_FORM", data: true });
        }
    };

    useEffect(() => {
        getWebinarList();
    }, [getWebinarList]);

    return (
        <SectionBlock backgroundColor="#F2F2F2">
            <Block>
                <List
                    creatAt={"31/10/2019"}
                    title={"NFP - Live Trading Webinar"}
                    contet={"Live trading the US Jobs data release."}
                    clickRegister={clickRegister}
                />
            </Block>
        </SectionBlock>
    );
}

export default ListsBlock;
