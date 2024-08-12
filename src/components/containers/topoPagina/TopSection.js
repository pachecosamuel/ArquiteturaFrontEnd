import { Slide } from "react-awesome-reveal";
import SimpleForm from "../form/SimpleForm";
import { TopContainer, FlexContainer, TextBox } from "./style";

  export const TopSection = () => {
    return (
      <TopContainer>
        <FlexContainer>
          <Slide direction="up" triggerOnce>
            <TextBox>
              <h2>Transforme sua Vida Financeira agora!</h2>
              <p>
              Não importando sua experiência ou capital 
              inicial, este guia prático te levará do zero ao conhecimento necessário para começar hoje e mudar sua realidade financeira!
              </p>
            </TextBox>
          </Slide>

          <Slide direction="left" triggerOnce>
            <SimpleForm />
          </Slide>

          <Slide direction="right" triggerOnce>
            <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
          </Slide>
          
        </FlexContainer>
      </TopContainer>
    );
  };

export default TopSection;
