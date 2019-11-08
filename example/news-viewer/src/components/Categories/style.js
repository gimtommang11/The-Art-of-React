import styled, {css} from 'styled-components';

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width : 768px;
  margin: 0 auto;
  @media screen and(max-width: 768px){
    width: 100%;
    overflow-x: auto;
  }
`;

export const Category = styled.div`
  font-size: 1.125rem;
  cuser: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover{
    color: #495057;
  }

  ${props => 
    props.active && css`
      font-weight: 600;
      border-bottom: 2px soild #22b8cf;
      color: #22b8cf;
      &:hover{
        color: #22b8cf;
      }
    `}

  &+& {
    margin-left: 1rem;
  }
`;
