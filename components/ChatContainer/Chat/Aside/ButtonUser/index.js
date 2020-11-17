import { makeStyles } from "@material-ui/core/styles";
import StarBorder from "@material-ui/icons/StarBorder";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

const ButtonUser = ({ name }, i) => {
    const classes = useStyles();
    return (
        <ListItem button className={classes.nested} key={i}>
            <ListItemIcon>
            <StarBorder />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default ButtonUser