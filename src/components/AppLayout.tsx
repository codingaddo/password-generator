import styled from "styled-components";

const AppLayout = styled.div`
  max-width: 450px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 878px) {
    max-width: 720px;
  }
`;

export default AppLayout;
