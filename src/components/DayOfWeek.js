import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
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
}))

export default function NestedList(props) {
  const { setDayOfWeek, setDayOfMonth } = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >

      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <ViewWeekIcon />
        </ListItemIcon>
        <ListItemText primary="Week" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>



      <Collapse in={open} timeout="auto" unmountOnExit>


        <List component="div" disablePadding>

          {
            ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day, i) => {
              return (
                <ListItem onClick={() => { setDayOfWeek(day); setDayOfMonth(null); setOpen(false) }} key={i} button className={classes.nested}>
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