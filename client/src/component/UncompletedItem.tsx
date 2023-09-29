import { Typography } from "@mui/material";
import { useStyles } from "../style/useStyle";
import CloseIcon from "@mui/icons-material/Close";
interface props {
  todo: {
    _id: String;
    content: String;
    completed: Boolean;
  };
  handleComplete: (id: String, completed: Boolean) => Promise<void>;
}
const UncompletedItem: React.FunctionComponent<any> = ({
  todo,
  handleComplete,
}: props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.item} component={"div"} mb={2}>
        <Typography className={classes.span} component={"span"}>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            onClick={() => handleComplete(todo._id, true)}
          />
          {todo.content}
        </Typography>
        <CloseIcon sx={{ color: "#555555" }} />
      </Typography>
    </div>
  );
};

export default UncompletedItem;
