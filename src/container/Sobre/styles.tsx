import styled from 'styled-components';

const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;

  @media (max-width: 767px) {
    display: block;

    img {
      width: 100%;
    }
  }

  img {
    height: 157px;
  }
`;

export default GithubSecao;
