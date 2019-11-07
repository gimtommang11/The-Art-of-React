import styled from 'styled-components'

export const NewsItemContainer = styled.div `
  displady: flex;
  .thumbnail {
    margin-right: 1rem;
  }
  img{
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }
  .contents{
    h2{
      margin:0;
      a{
        color:black;
      }
    }
    p{
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: narmal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;