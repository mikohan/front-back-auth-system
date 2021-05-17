import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { verify } from '../store/users/userAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: theme.spacing(5),
    },
    textField: {
      padding: theme.spacing(5),
    },
    bottom: {
      padding: theme.spacing(5),
      '&>span': {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
      },
    },
  })
);
export interface ResetPasswordProps {
  match: {
    params: {
      uid: string;
      token: string;
    };
  };
}

export default function Activate({
  match,
}: ResetPasswordProps): ReactElement | null {
  const classes = useStyles();
  const [requestSent, setRequestSent] = React.useState(false);
  const dispatch = useDispatch();
  const { uid, token } = match.params;

  function onSubmit() {
    if (uid && token) {
      dispatch(verify(uid, token));
      setRequestSent(true);
    }
  }
  if (requestSent) {
    return <Redirect to="/login" />;
  }

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h5">Activate your account</Typography>
        </Grid>
        <Grid className={classes.textField} item xs={12}>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Activate Account
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
