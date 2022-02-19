import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
`; 

export const Xp = styled.span`
  font-size: 1rem;
`; 

export const Div = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  position: relative;

  div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }

  span {
    position: absolute;
    top: 12px;
    /* Component center offset (half its size) to center */
    transform: translateX(-50%);
  }
`; 
