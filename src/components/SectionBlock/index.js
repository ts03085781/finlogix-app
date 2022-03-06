import { Section } from "./styles";

function SectionBlock(props) {
    return (
        <Section backgroundColor={props.backgroundColor}>
            <div>{props.children}</div>
        </Section>
    );
}

export default SectionBlock;
