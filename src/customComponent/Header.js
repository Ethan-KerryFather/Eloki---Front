import {
  Chunk,
  GlobalStyle,
  Menu,
  RowFlexBox,
  SmallView,
  Word,
} from "./customComponent";
import { headMenu } from "../App";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <GlobalStyle />
      <RowFlexBox
        style={{ justifyContent: "center", alignItems: "center" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={require("../asset/HeaderIcon.png")}
          alt="logo"
          style={{ width: "35px", marginRight: "5px", color: "black" }}
        />
        <Word bold style={{ fontSize: "1.2rem" }}>
          QVE Finance
        </Word>
      </RowFlexBox>

      {headMenu.map((element, index) => (
        <Word
          key={index}
          hover
          style={{
            fontSize: "1rem",
            paddingLeft: "2rem",
            color: "black",
          }}
          onClick={() => {
            switch (element) {
              // case "Eloki":
              //   navigate("/ilp");
              //   break;
              default:
                break;
            }
          }}
        >
          {element}
        </Word>
      ))}

      {props.isLanding && (
        <SmallView
          style={{ marginLeft: "5%", borderRadius: 10, zIndex: 100 }}
          onClick={() => {
            console.log("clicked");
            navigate("/investment");
          }}
        >
          <Word bold white style={{ fontSize: "1.5rem" }}>
            Launch app
          </Word>
        </SmallView>
      )}
    </Menu>
  );
};
