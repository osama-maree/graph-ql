import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  app: {
    color: "#ffffffb0",
    backgroundColor: "#ffffff21",
    width: "600px",
    borderRadius: "7px",
    boxShadow: "0 15px 40px -20px black",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: 700,
  },
  inputTodo: {
    width: "100%",
    fontSize: "20px",
    backgroundColor: "#f4f4f435",
    borderRadius: "7px",
    "&::placeholder": {
      color: "#ffffff70 !important",
    },
  },
  todo: {
    display: "flex",
    flexDirection: "column",
    gap: ".8rem",
  },
  item: {
    backgroundColor: "#f4f4f4bd",
    padding: "1rem 1.5rem",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  },
  span: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
  completedItem: {
    backgroundColor: "#74c674",
    textDecoration: "line-through",
  },
}));
