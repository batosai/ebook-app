import { primary1Color, primary2Color, accent1Color } from '../../color';

export default {
  content: {
    position: "fixed",
    top: "0",
    backgroundColor: primary1Color,
    width: "100%",
    height: "50px",
    color: accent1Color,
  },
  title: {
    margin:0,
    display: "inline-block",
  },
  list: {
    float: "right",
    margin: "1vw",
    item: {
      float: "left",
      listStyle: "none",
      marginLeft: "1vw",
      last: {
        marginLeft: "7vw",
        marginRight: "1vw",
      },
    },
  },
  btn: {
    height: "3vh",
    background: accent1Color,
    border: 0,
    borderRadius: "5px",
    cursor:'pointer',
  },
  search: {
    width: "10vw",
    height: "3vh",
    border: "none",
    marginRight: ".5vw",
    backgroundColor: primary2Color,
    borderRadius: "5px",
    color: accent1Color,
  },
};
