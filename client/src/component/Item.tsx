import { Typography } from "@mui/material";
import { useStyles } from "../style/useStyle";
import CloseIcon from "@mui/icons-material/Close";
import { props } from "../feature/Interfaces";

const Item: React.FunctionComponent<any> = ({
  todo,
  handleComplete,
  handleDelete,
}: props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={`${classes.item} ${
          todo.completed ? classes.completedItem : ""
        }`}
        component={"div"}
        mb={2}
      >
        <Typography className={classes.span} component={"span"}>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            checked={todo.completed ? true : false}
            onClick={() => handleComplete(todo._id, !todo.completed)}
          />
          {todo.content}
        </Typography>
        <CloseIcon
          sx={{ color: "#555555", cursor: "pointer" }}
          onClick={() => handleDelete(todo._id)}
        />
      </Typography>
    </div>
  );
};

export default Item;
