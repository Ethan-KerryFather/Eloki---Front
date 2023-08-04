import { Chunk, GlobalStyle, Menu, RowFlexBox, Word } from "./customComponent";
import Logo from "../img/logo.svg";
import { headMenu } from "../App";
import { useNavigate } from "react-router-dom";

export const Header = () => {
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
          style={{ width: "35px", marginRight: "5px" }}
        />
      </RowFlexBox>

      {headMenu.map((element, index) => (
        <Word
          key={index}
          hover
          style={{
            fontSize: "1rem",
            paddingLeft: "2rem",
            color: "#f6f7fccc",
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
    </Menu>
  );
};
