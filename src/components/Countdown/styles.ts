import styled, { css } from 'styled-components';

export const Container = styled.div`

`;

export const ContainerTime = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  /* Always first DIV */
  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  /* All SPAN within the first DIV */
  & > div span{
    flex: 1;
  }

  /* First SPAN within the first DIV */
  & > div span:first-child{
    border-right: 1px solid #f0f1f3;
  }

  /* Last SPAN within the first DIV */
  & > div span:last-child{
    border-left: 1px solid #f0f1f3;
  }

  /* Always spa first */
  & > span{
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({propActive}) => propActive ? 'var(--white)' : 'var(--blue)'};
  color: ${({propActive}) => propActive ? 'var(--title)' : 'var(--white)'};

  font-size: 1.25remm;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover {
    /* background: var(--blue-dark); */
    background: ${({propActive}) => propActive ? 'var(--red)' : 'var(--blue-dark)'};
    color: ${({propActive}) => propActive ? 'var(--white)' : 'var(--white)'};
  }

  /* .active */
  /* ${({ propActive }) => propActive && css`
    background: var(--white);
    color: var(--title);
  `} */

`;