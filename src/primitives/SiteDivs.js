import styled from 'styled-components';

const Site = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SiteBody = styled.div`
  background-image: linear-gradient(to bottom, GhostWhite, LightSlateGray);;
  flex: 1 1 auto;
  display: flex;
`;

const SiteMain = styled.div`
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
`;

export { Site, SiteBody, SiteMain };
