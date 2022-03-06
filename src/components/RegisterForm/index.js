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

function RegisterForm() {
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
                            <option>請選擇你最愛的寵物</option>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Hamster</option>
                            <option>Parrot</option>
                            <option>Spider</option>
                            <option>Goldfish</option>
                        </select>
                    </SelectBlock>

                    <InputBlock>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text"></input>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text"></input>
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email"></input>
                    </InputBlock>
                    <RegisterBtn>Register</RegisterBtn>
                </Form>
            </OutSideBox>
        </SectionBlock>
    );
}

export default RegisterForm;
