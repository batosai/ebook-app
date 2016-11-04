export default {
  content: {
    position: "fixed",
    top: "0",
    backgroundColor: "#181818",
    width: "100%",
    height: "50px",
    color: "#fff",
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
    background: "#fff",
    border: 0,
    borderRadius: "5px",
    cursor:'pointer',
    focus: {
      background: "#999",
    }
  },
  search: {
    width: "10vw",
    height: "3vh",
    border: "none",
    marginRight: ".5vw",
    backgroundColor: "#252830",
    borderRadius: "5px",
    color: "#fff",
  },
};
