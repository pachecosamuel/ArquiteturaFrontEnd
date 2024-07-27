// src/pages/NewProductPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../common/Button";

export const NewProductPage = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Obrigado por se inscrever!</h2>
      <p>
        Clique no link abaixo para baixar seu material gratuito:
        <br />
        <a href="URL_PARA_O_MATERIAL_GRATUITO" download>
          Baixar Material Gratuito
        </a>
      </p>
      <hr />
      <h3>Fundamentos da Educação Financeira</h3>
      <p>Adquira nosso novo infoproduto por apenas R$ 35,90.</p>
      <a
        href="URL_PARA_O_PRODUTO_NA_KIWIFY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Comprar Agora</Button>
      </a>
    </div>
  );
};

export default NewProductPage;
