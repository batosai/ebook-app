import { primary1Color, primary3Color, hover1Color, accent1Color, notificationColor } from '../../color';

export default {
  content: {
    position: "fixed",
    top: "50px",
    left: 0,
    width: "250px",
    height: "100%",
    backgroundColor: primary3Color,
  },
  list: {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    item: {
      listStyle: "none",
      margin: "20px",
      link: {
        color: accent1Color,
        textDecoration: "none",
        display: "block",
        padding: "10px",
        hover: {
          backgroundColor: primary1Color,
          borderRadius: "5px"
        }
      },
    },
  },
  footer: {
    position: "fixed",
    width: "250px",
    bottom: 0,
    item: {
      width: "calc(50% - 1px)",
      display: "inline-block",
      margin: 0,
      first: {
        marginRight: "2px",
      },
      btn: {
        position: "relative",
        width: "100%",
        display: "inline-block",
        background: primary1Color + " center center",
        border: "none",
        color: accent1Color,
        fontSize: "25px",
        textAlign: "center",
        textDecoration: 'none',
        padding: "10px 0",
        cursor:'pointer',
        margin: 0,
        hover: {
          background: hover1Color,
        },
        notification: {
          position: "absolute",
          top: "0",
          right: "0",
          display: "block",
          fontSize: "10px",
          backgroundColor: notificationColor,
          padding: "5px",
        }
      },
    }
  },
};
