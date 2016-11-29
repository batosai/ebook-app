import { primary3Color, accent1Color, accent2Color } from '../../color';

const fontSize = "14px";
const editor = {
  fontSize,
  fontFamily: "sans-serif",
  fontWeight: "bold",
  display: "inline-block",
  lineHeight: "18px",
  backgroundColor: "transparent",
  border: "1px dashed " + primary3Color,
  color: accent1Color,
  height: "18px",
  padding: "0 2px",
  margin: "0 4px",
}

export default {
  aside: {
    position: "fixed",
    top: "50px",
    right: "-250px",
    width: "210px",
    height: "calc(100% - 90px)",
    backgroundColor: primary3Color,
    color: accent1Color,
    padding: "20px",
    overflowY:"auto",
    fontSize
  },
  close: {
    color: accent2Color,
    backgroundColor: accent1Color,
    float: "right",
    textDecoration: "none",
    textAlign: "center",
    borderRadius: "50px",
    border: "1px solid " + accent1Color,
    width: "20px",
    height: "20px",
    lineHeight: "20px",
    marginBottom: "20px",
    cursor: "pointer",
  },
  title: {
    fontSize: "22px",
    lineHeight: "22px",
    height: "22px",
    padding: "0",
    margin: "0",
  },
  static: {
    fontSize,
    color: accent1Color,
  },
  text: {
    width: "40px",
    ...editor,
  },
  longText: {
    width: "140px",
    ...editor,
  },
  description: {
    width: "210px",
    ...editor,
    height: "30px",
  },
};
