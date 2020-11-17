import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import ButtonUser from './ButtonUser'

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

const users = [
    { name: 'Darwin VA' },
    { name: 'Luchizhín' },
    { name: 'Carlita' },
    { name: 'Amod' },
    { name: 'Lishi' },
    { name: 'Babex' },
    { name: 'Gelencita' },
]

function Aside() {
  const classes = useStyles();
  const [openUsers, setOpenUsers] = useState(true);

  return (
    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root} >
        <ListItem button onClick={()=>setOpenUsers(false)}>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Votaciones" />
            {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!openUsers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Chacalón Jr." />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Invierno de Vivaldi" />
                </ListItem>
            </List>
        </Collapse>
        <ListItem button onClick={()=>setOpenUsers(true)}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
            {openUsers ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                { users.map(ButtonUser) }
            </List>
        </Collapse>
    </List>
  );
}

export default Aside;
