const { Image } = require("@chakra-ui/react");
const {
  Word,
  SmallView,
  ColumnFlexBox,
  RowFlexBox,
  Words,
} = require("./customComponent");

export default function FooterTokenomics() {
  return (
    <ColumnFlexBox
      style={{
        width: "100%",
        backgroundColor: "white",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
      }}
    >
      <RowFlexBox
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image src={require("../img/QVE.png")} style={{ height: "20vh" }} />
        <ColumnFlexBox>
          <Words
            bold
            shadow
            style={{
              color: "#030063",
              fontSize: "2rem",
            }}
          >
            QVE Tokenomics
          </Words>
          <Words
            shadow
            style={{
              color: "#030063",
              fontSize: "1.5rem",
            }}
          >
            Want to know more about QVE?
          </Words>
        </ColumnFlexBox>
      </RowFlexBox>
    </ColumnFlexBox>
  );
}
