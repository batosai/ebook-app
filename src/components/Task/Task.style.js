import { primary1Color, primary2Color, accent1Color } from '../../color';

export default {
  content: {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    marginLeft: "250px",
    backgroundColor: primary2Color,
  },
  item: {
    borderBottom: "1px solid " + primary1Color,
    text: {
      margin: "15px 25px",
      color: accent1Color,
    },
    remove: {
      margin: "0 25px",
      float: "right",
      color: accent1Color,
      cursor: 'pointer'
    }
  }
};
