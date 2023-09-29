import { makeStyles } from "@material-ui/core";
import { Box, Typography, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const useStyles = makeStyles(() => ({
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

const App: React.FunctionComponent<any> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.app} p={3}>
      <Typography
        variant="h4"
        component={"h2"}
        my={2}
        className={classes.title}
      >
        Osama - Task &#128513;
      </Typography>
      <TextField
        className={classes.inputTodo}
        inputProps={{
          style: {
            color: "white",
          },
        }}
        placeholder="Add New Task..."
        type="text"
      />
      <Typography
        className={`${classes.todo}`}
        variant="body2"
        component={"div"}
        mt={4}
      >
        <Typography
          className={`${classes.todo}`}
          variant="body2"
          component={"div"}
        >
          <Typography className={classes.item} component={"div"} mb={2}>
            <Typography className={classes.span} component={"span"}>
              <input type="checkbox" />
              ssss
            </Typography>
            <CloseIcon sx={{ color: "#555555" }} />
          </Typography>
        </Typography>

        <Typography
          className={`${classes.todo}`}
          variant="body2"
          component={"div"}
        >
          <Typography variant="body1" color="white">
            Complted Task
          </Typography>
          <Typography
            className={`${classes.item} ${classes.completedItem}`}
            component={"div"}
          >
            <span>
              <input type="checkbox" />
              click
            </span>
            <CloseIcon />
          </Typography>
        </Typography>
      </Typography>
    </Box>
  );
};

export default App;
