import { useState, useEffect, useCallback } from "react";
import SectionBlock from "../SectionBlock";
import store from "../../redux/store";
import { setCookie, getCookie } from "../../utils/cookieMath";

import {
    Form,
    OutSideBox,
    InputBlock,
    RegisterBtn,
    Titel,
    Explain,
    SelectBlock,
} from "./styles";

function RegisterForm() {
    const state = store.getState();

    const [topic, seTtopic] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isVerify, setIsVerify] = useState(false);

    const registerSubmit = () => {
        if (!isVerify) return;
        const data = { ids: 123456, model: "POST" };
        fetch(`${URL}}/favourites`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .them((jsonData) => {
                console.log("jsonData", jsonData);
            })
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        const chackTopic = topic.trim();
        const chackFirstName = firstName.trim();
        const chackLastName = lastName.trim();

        const emailRule =
            /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        const chackEmail = email.trim().search(emailRule) !== -1;

        if (chackTopic && chackFirstName && chackLastName && chackEmail) {
            setIsVerify(true);
        }
    }, [topic, firstName, lastName, email]);

    return (
        <SectionBlock>
            <OutSideBox id="registerForm">
                <Form>
                    <Titel>Register for a Webinar now</Titel>
                    <Explain>
                        Please fill in the form below and you will be contacted
                        by one of our professional business experts.
                    </Explain>

                    <SelectBlock>
                        <label htmlFor="topic">Topic</label>
                        <select
                            id="topic"
                            value={topic}
                            onChange={(e) => {
                                seTtopic(e.target.value);
                            }}
                        >
                            {state.webinarList.map((ele) => (
                                <option key={ele.id}>{ele.titel}</option>
                            ))}
                        </select>
                    </SelectBlock>

                    <InputBlock>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputBlock>
                    <RegisterBtn onClick={registerSubmit}>Register</RegisterBtn>
                </Form>
            </OutSideBox>
        </SectionBlock>
    );
}

export default RegisterForm;
