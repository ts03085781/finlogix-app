import {
    Form,
    OutSideBox,
    InputBlock,
    RegisterBtn,
    Titel,
    Explain,
    SelectBlock,
} from "./styles";
import SectionBlock from "../SectionBlock";
import store from "../../redux/store";

function RegisterForm() {
    const state = store.getState();
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
                        <select id="topic">
                            {state.webinarList.map((ele) => (
                                <option>{ele.titel}</option>
                            ))}
                        </select>
                    </SelectBlock>

                    <InputBlock>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" />
                    </InputBlock>
                    <RegisterBtn>Register</RegisterBtn>
                </Form>
            </OutSideBox>
        </SectionBlock>
    );
}

export default RegisterForm;
