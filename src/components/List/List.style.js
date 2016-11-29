import { primary2Color, accent1Color } from '../../color';

// dynamiser le 50px qui viens de la hauteur de la bar
export default {
  collection: {
    position: "fixed",
    overflowY:"auto",
    height: "calc(100% - 50px)",
    margin: 0,
    padding: 0,
    marginLeft: "250px",
    backgroundColor: primary2Color,
    item: {
      cursor: "pointer",
      listStyle: "none",
      // float: "left",
      display: "inline-flex",
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
    position: "fixed",
    overflowY:"auto",
    height: "calc(100% - 50px)",
    display: 'block',
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
