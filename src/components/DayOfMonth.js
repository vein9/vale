import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: '50vh',
    overflowY: 'scroll',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const { setDayOfMonth, setDayOfWeek } = props
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const today = new Date()
  const vailableDays =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].filter(day => day > today.getDay())

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
        <ListItemText primary="day ... of month (optional)" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>


        <List component="div" disablePadding>
          {
            vailableDays.map((day, i) => {
              return (
                <ListItem onClick={() => { setDayOfMonth(day); setDayOfWeek(null); setOpen(false) }} button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={day} />
                </ListItem>
              )
            })
          }

        </List>
      </Collapse>


    </List>
  );
}