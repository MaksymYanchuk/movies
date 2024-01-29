import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;

  @media ${(props) => props.theme.media.phone} {
    flex-wrap: wrap;
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "18px"};

  @media ${(props) => props.theme.media.phone} {
    flex: 0 1 50%;
    padding-bottom: 20px;

    gap: ${(props) => props.gap || "12px"};
  }
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;

  @media ${(props) => props.theme.media.phone} {
    text-align: center;
    font-size: 16px;
  }
`;

const MediaWrapper = styled(Block)`
  flex-direction: row;
  justify-content: center;
`;

const Media = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 42px;
  height: 44px;
  background: url(${(props) => props.image}) no-repeat
    ${(props) => props.theme.colors.darkGrey} center;
`;

const AppWrapper = styled(Block)`
  @media ${(props) => props.theme.media.phone} {
    flex: 0 1 100%;
  }
`;

const AppButtonsWrapper = styled.div`
  width: 157px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 17px;

  @media ${(props) => props.theme.media.phone} {
    flex-direction: row;
    gap: 5px;
    width: auto;
  }
`;
const AppLink = styled(Link)`
  height: 41px;
  @media ${(props) => props.theme.media.phone} {
    height: 100%;
  }
`;

const StyledImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const DecorateLine = styled.div`
  height: 1px;
  width: calc(100% + 100px);
  margin-left: -50px;
  border-top: solid ${(props) => props.theme.colors.darkGrey} 1px;
`;

const FooterEnd = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterEndText = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledLink = styled(Link)`
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey};
  @media ${(props) => props.theme.media.phone} {
    text-align: center;
  }
`;
const StyledP = styled.p`
  color: ${(props) => props.theme.colors.grey};
`;

const Logo = styled.img`
  width: 120px;
  min-width: 100px;
  align-self: flex-end;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Block>
          <Title>Company</Title>
          <Block gap={"10px"}>
            <StyledLink>About Us</StyledLink>
            <StyledLink>Careers</StyledLink>
          </Block>
        </Block>

        <Block>
          <Title>Need Help</Title>
          <Block gap={"10px"}>
            <StyledLink>Visit Help Center?</StyledLink>
            <StyledLink>Share Feedback</StyledLink>
          </Block>
        </Block>

        <Block>
          <Title>Social Media</Title>
          <MediaWrapper direction={"row"} gap={"14px"}>
            <Media>
              <Link>
                <StyledImg
                  src="/src/assets/instagram.svg"
                  width={"20px"}
                  height={"20px"}
                />
              </Link>
            </Media>
            <Media>
              <Link>
                <StyledImg
                  src="/src/assets/twitter.svg"
                  width={"20px"}
                  height={"20px"}
                />
              </Link>
            </Media>
          </MediaWrapper>
        </Block>

        <AppWrapper>
          <Title>Download Our App</Title>
          <AppButtonsWrapper>
            <AppLink>
              <StyledImg src="/src/assets/app-store.svg" width={"100%"} />
            </AppLink>
            <AppLink>
              <StyledImg src="/src/assets/google-play.svg" width={"100%"} />
            </AppLink>
          </AppButtonsWrapper>
        </AppWrapper>
      </Wrapper>

      <DecorateLine />
      <FooterEnd>
        <FooterEndText>
          <StyledP>© 2023 MovieDB. All Rights Reserved.</StyledP>
          <StyledLink>Terms Of Use </StyledLink>
          <StyledLink>Privacy Policy</StyledLink>
          <StyledLink>FAQ</StyledLink>
        </FooterEndText>
        <Logo src="/src/assets/logo.svg" />
      </FooterEnd>
    </>
  );
};

export default Footer;
