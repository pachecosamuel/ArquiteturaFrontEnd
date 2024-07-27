import { Slide } from "react-awesome-reveal";
import SimpleForm from "../form/SimpleForm";
import { TopContainer, FlexContainer, TextBox } from "./style";

  export const TopSection = () => {
    return (
      <TopContainer>
        <FlexContainer>
          <Slide direction="up" triggerOnce>
            <TextBox>
              <h2>Descubra sua melhor versão!</h2>
              <p>
                Preencha o formulário ao lado para receber nossa isca digital e
                começar sua jornada de desenvolvimento pessoal. it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. 
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
