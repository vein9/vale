import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const { setDayOfMonth, setDayOfWeek } = props
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >

      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Month" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>



      <Collapse in={open} timeout="auto" unmountOnExit>


        <List component="div" disablePadding>

          {
            [...new Array(31)].map((_, i) => {
              return (
                <ListItem onClick={() => { setDayOfMonth(i + 1); setDayOfWeek(null); setOpen(false) }} button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={i + 1} />
                </ListItem>

              )
            })
          }



        </List>


      </Collapse>


    </List>
  );
}