import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and(max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

//NavLink 사용
export const Category = styled(NavLink)`    
  font-size: 1.125rem;
  cuser: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  &.active{
    font-weight: 600;
    border-bottom: 2px soild #22b8cf;
    color: #22b8cf;
     &:hover {
      color: #3bc9db;
  }

  &+& {
    margin-left: 1rem;
  }
`;
