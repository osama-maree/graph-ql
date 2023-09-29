import { Typography } from "@mui/material";
import { useStyles } from "../style/useStyle";
import CloseIcon from "@mui/icons-material/Close";
interface props {
  text: String;
}
const CompletedItem: React.FunctionComponent<any> = ({ text }: props) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.item} ${classes.completedItem}`}
        component={"div"}
      >
        <Typography className={classes.span} component={"span"}>
          <input type="checkbox" defaultChecked />
          {text}
        </Typography>
        <CloseIcon sx={{ color: "#555555" }} />
      </Typography>
    </>
  );
};

export default CompletedItem;
