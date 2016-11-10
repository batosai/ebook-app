import { primary3Color, accent1Color, accent2Color } from '../../color';

export default {
  aside: {
    position: "fixed",
    top: "50px",
    right: "-250px",
    width: "210px",
    height: "calc(100% - 40px)",
    backgroundColor: primary3Color,
    color: accent1Color,
    padding: "20px",
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
    cursor:'pointer',
  },
};
