import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid; /* Duas colunas com tamanho igual */
    grid-template-columns: 1fr 1fr; /* Espaçamento entre Grid */    
    gap: 6.25rem; /* 6.25 x 16 = 100 px desktop e diminuinto*/
    align-content: center;
  }
`;

export const LeftContainer = styled.div`
  
`;
