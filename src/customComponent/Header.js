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
          src={require("../asset/Eloki.png")}
          alt="logo"
          style={{ width: "50px", marginRight: "5px" }}
        />
        <Word
          bold
          white
          style={{
            paddingRight: "10px",
            color: "white",
            fontSize: "1.8rem",
            letterSpacing: "0.2rem",
          }}
        >
          Eloki
        </Word>
      </RowFlexBox>

      {headMenu.map((element, index) => (
        <Word
          key={index}
          hover
          style={{
            fontSize: "0.9rem",
            paddingLeft: "1.5rem",
            color: "#f6f7fccc",
          }}
          onClick={() => {
            switch (element) {
              case "Eloki":
                navigate("/ilp");
                break;
              case "Loan":
                navigate("/loan");
                break;
              case "Swap":
                navigate("/swap");
                break;
              case "Stake":
                navigate("/stake");
                break;
              case "pool":
                navigate("/pool");
                break;
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
