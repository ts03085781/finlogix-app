import { Content, VideoBlock, Article } from "./styles";
import SectionBlock from "../SectionBlock";

function Introduction() {
    return (
        <SectionBlock>
            <Content>
                <Article>
                    <h3>Meet Your Host - Alistair Schultz</h3>
                    <p>
                        With more than 15 years of experience covering both the
                        FX and CFD markets, Alistair has extensive knowledge
                        covering algorithmic trading, market analysis & an
                        impressive educational background.
                    </p>
                    <p>
                        As the author of‘Essentials for Trading Students – An
                        Overview of the Basics for Aspiring Traders’, which was
                        released in 2017, Alistair will take any aspiring trader
                        from the basics right through to advanced analytics used
                        in institutional funds.
                    </p>
                    <p>
                        At the core of Alistair’s teachings is the ability to
                        help each trader uncover their ‘Trading DNA', helping
                        them flourish with the skills and timeframes that work
                        best for them.
                    </p>
                </Article>
                <VideoBlock
                    src="https://www.youtube.com/embed/UvH70UkbyfE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </Content>
        </SectionBlock>
    );
}

export default Introduction;
