import styled from "styled-components";

const AppLayout = styled.div`
  max-width: 480px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 868) {
    max-width: 600px;
  }
`;

export default AppLayout;
