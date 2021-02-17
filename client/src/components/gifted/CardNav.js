import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,Typography, CardContent, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card1: {
      border: '2px solid rgba(83, 91, 100, 1)',
      backgroundColor: 'transparent',
      borderRadius: 0,
      margin: theme.spacing(2),
      width: 200,
      height: 200,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      placeContent: 'center'
    },
    cardInner: {

    }
}))

const CardNav = ({title, link}) => {
    const classes = useStyles();
    return (
        <div>
        <Link to={link} style={{textDecoration: 'none'}}>
            <Card onClick={Link} className={classes.card1}>
            <CardContent>
            <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
               <Grid item><Typography variant='h3'>{title}</Typography>
               </Grid> 
                </Grid>
                </CardContent>
            </Card>
        </Link>
      </div>
    )
}

export default CardNav
