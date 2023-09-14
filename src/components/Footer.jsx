import styled from "styled-components";
import Select from "react-select";

const dot = (scr, state = null, isDefaultValue = false) => {
  if ((state !== null && state.isSelected === true) || isDefaultValue) {
    return {
      alignItems: "center",
      display: "flex",

      ":before": {
        content: "' '",
        backgroundImage: `url(${scr})`,
        backgroundRepeat: "no-repeat",
        display: "block",
        height: 16,
        width: 16,
        marginRight: 10,
      },
    };
  } else {
    return {
      alignItems: "center",
      display: "flex",

      ":before": {
        content: "' '",
        display: "block",
        height: 16,
        width: 16,
        marginRight: 10,
      },
    };
  }
};

const Wrapper = styled.div`
  display: flex;
  gap: 133px;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Block = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  gap: ${(props) => props.gap || "18px"};
`;
const Title = styled.h3`
  font-weight: 500;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.grey};
  font-weight: 400;
`;

const Media = styled.a`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background: url(${(props) => props.image}) no-repeat
    ${(props) => props.theme.colors.darkGrey} center;
`;

const AppLink = styled.a`
  width: 157px;
  height: 48px;
  background: url(${(props) => props.image}) no-repeat center;
`;
const DecorateLine = styled.div`
    height: 1px;
    width: calc(100% + 100px);
    margin-left: -50px;
    border-top: solid ${(props) => props.theme.colors.darkGrey} 1px;
`;
const FooterEnd = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 343px 144px 144px 71px 43.3%;
  align-items: center;
`;

const P = styled(Link)``;

const Logo = styled.img`
  width: 10vmax;
  min-width: 100px;
  justify-self: end;
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Block>
          <Title>Company</Title>
          <Block gap={"10px"}>
            <Link>About Us</Link>
            <Link>Careers</Link>
          </Block>
        </Block>

        <Block>
          <Title>Need Help</Title>
          <Block gap={"10px"}>
            <Link>Visit Help Center?</Link>
            <Link>Share Feedback</Link>
          </Block>
        </Block>

        <Block>
          <Title>View Website in</Title>
          <Select
            defaultValue={{ value: "english", label: "English" }}
            options={[
              { value: "english", label: "English" },
              { value: "ukrainian", label: "Ukrainian" },
            ]}
            styles={{
              menu: (provided) => ({
                ...provided,
                borderRadius: 5,
              }),
              menuList: (provided) => ({
                ...provided,
                padding: 0,
                borderRadius: 5,
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: "rgba(255,255,255,.2)",
                color: "rgba(255,255,255,.9)",
                borderRadius: "25px",
                paddingLeft: 15,
                paddingRight: 15,
                width: 170,
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: "grey",
                color: "rgba(255,255,255,.9)",
                ...dot("/src/assets/checkmark.svg", state),
              }),
              input: (styles) => ({
                ...styles,
                display: "none",
                padding: 20,
              }),
              placeholder: (styles) => ({
                ...styles,
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "rgba(255,255,255,.9)",
                ...dot("/src/assets/checkmark.svg", null, true),
              }),
            }}
          />
        </Block>

        <Block>
          <Title>Social Media</Title>
          <Block direction={"row"} gap={"14px"}>
            <Media image={"/src/assets/instagram.svg"}></Media>
            <Media image={"/src/assets/twitter.svg"}></Media>
          </Block>
        </Block>

        <Block>
          <Title>Download Our App</Title>
          <Block gap={"10px"}>
            <AppLink image={"/src/assets/app-store.svg"}></AppLink>
            <AppLink image={"/src/assets/google-play.svg"}></AppLink>
          </Block>
        </Block>
      </Wrapper>
      <DecorateLine />
      <FooterEnd>
        <P>© 2023 MovieDB. All Rights Reserved.</P>
        <Link>Terms Of Use </Link>
        <Link>Privacy Policy</Link>
        <Link>FAQ</Link>
        <Logo src="/src/assets/logo.svg" />
      </FooterEnd>
    </>
  );
};

export default Footer;
