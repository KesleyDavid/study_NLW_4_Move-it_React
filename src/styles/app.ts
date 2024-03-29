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
    display: grid; /* Two columns of equal size */
    grid-template-columns: 1fr 1fr; /* Spacing between Grid */    
    gap: 6.25rem; /* 6.25 x 16 = 100 px desktop and decreasing*/
    align-content: center;
  }
`;

export const LeftContainer = styled.div`
  
`;
