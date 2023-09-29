import { Typography } from "@mui/material";
import { useStyles } from "../style/useStyle";
import CloseIcon from "@mui/icons-material/Close";
interface props {
  text: String;
}
const UncompletedItem: React.FunctionComponent<any> = ({ text }: props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.item} component={"div"} mb={2}>
        <Typography className={classes.span} component={"span"}>
          <input type="checkbox" />
          {text}
        </Typography>
        <CloseIcon sx={{ color: "#555555" }} />
      </Typography>
    </div>
  );
};

export default UncompletedItem;
