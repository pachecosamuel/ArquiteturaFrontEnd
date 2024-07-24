import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Span = styled.span`
  color: red;
  font-size: 0.9rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;
