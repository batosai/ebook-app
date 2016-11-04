export default {
  content: {
    position: "fixed",
    top: "50px",
    left: 0,
    width: "250px",
    height: "100%",
    backgroundColor: "#1e2127",
  },
  list: {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    item: {
      listStyle: "none",
      margin: "20px",
      link: {
        color: "#cfd2da",
        textDecoration: "none",
        display: "block",
        padding: "10px",
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
        width: "100%",
        background: "#181818",
        border: "none",
        color: "#fff",
        fontSize: "25px",
        padding: "10px 0",
        cursor:'pointer',
        hover: {
          background: "#272727",
        }
      },
    }
  },
};
