import { primary2Color, accent1Color } from '../../color';

export default {
  collection: {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    marginLeft: "250px",
    backgroundColor: primary2Color,
    item: {
      cursor: "pointer",
      listStyle: "none",
      float: "left",
      padding: "20px",
      color: accent1Color,
      image: {
        display: "inline-block",
        width: "190px",
        height: "280px",
      },
      content: {
        display: "none",
      },
      link: {
        display: "block",
        color: accent1Color
      }
    },
  },
  list: {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    marginLeft: "250px",
    backgroundColor: primary2Color,
    item: {
      cursor: "pointer",
      listStyle: "none",
      padding: "20px",
      color: accent1Color,
      image: {
        display: "inline-block",
        width: "90px",
      },
      content: {
        display: "inline-block",
        marginLeft: "10px",
        position: "absolute",
      },
      link: {
        display: "block",
        color: accent1Color
      }
    },
  },
};
