import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PhotoRender } from './PhotoRender';
import { useParams } from 'react-router-dom';
import { UserRender } from './UserRender';
import { useUserById } from '../hooks/useUserById';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardUser() {
  const user = useUserById(useParams().id)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <div className="first_name">
          <h2>Nombre:</h2>
        {user.data?.first_name}
      </div>
      

  
      <CardContent>
        <PhotoRender img={user.data?.avatar} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        </IconButton>
        <IconButton aria-label="share">
          
        </IconButton>
        <Typography paragraph>
          <h2>Datos del usuarios</h2>
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          <UserRender user={user} />
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
