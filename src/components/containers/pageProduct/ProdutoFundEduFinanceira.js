import React from 'react';
import { Container, Title, Subtitle, Paragraph, DownloadLink, Divider, ProductTitle, ProductDescription, BuyButton } from './styles';

export const NewProductPage = () => {
  return (
    <Container>
      <Title>Obrigado por se inscrever!</Title>
      <Paragraph>
        Clique no link abaixo para baixar seu material gratuito:
        <br />
        <DownloadLink href="URL_PARA_O_MATERIAL_GRATUITO" download>
          Baixar Material Gratuito
        </DownloadLink>
      </Paragraph>
      <Divider />
      <ProductTitle>E que tal prosperar financeiramente PRA SEMPRE?</ProductTitle>
      <ProductTitle>Aprenda Fundamentos da Educação Financeira</ProductTitle>
      <ProductDescription>Adquira nosso novo infoproduto por apenas R$ 35,90.</ProductDescription>
      <a href="URL_PARA_O_PRODUTO_NA_KIWIFY" target="_blank" rel="noopener noreferrer">
        <BuyButton>Comprar Agora</BuyButton>
      </a>
    </Container>
  );
};

export default NewProductPage;
