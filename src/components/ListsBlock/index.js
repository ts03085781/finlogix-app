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
    const getWebinarList = useCallback(() => {
        fetch(`${URL}/posts?per_page=${per_page}&page=${page}`)
            .then((response) => response.json())
            .then((myJson) => {
                store.dispatch({ type: "SET_WEBINAR_LIST", data: myJson });
            })
            .catch((error) => console.error("Error:", error));
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
                {state.webinarList.map((ele) => (
                    <List
                        key={ele.id}
                        creatAt={ele.created_at}
                        title={ele.title}
                        contet={ele.contet}
                        clickRegister={clickRegister}
                    />
                ))}
                {/* //API無法使用 固使用假資料 */}
                <List
                    key={"testKey"}
                    creatAt={"test created_at"}
                    title={"test title"}
                    contet={"test contet"}
                    clickRegister={clickRegister}
                />
            </Block>
        </SectionBlock>
    );
}

export default ListsBlock;
