import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { resetPasswordConfirm } from '../store/users/userAction';
import { Redirect } from 'react-router';

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

export default function ResetPasswordConfirm({
  match,
}: ResetPasswordProps): ReactElement | null {
  const classes = useStyles();
  const [requestSent, setRequestSent] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const { uid, token } = match.params;

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onSubmit() {
    if (password) {
      dispatch(resetPasswordConfirm(uid, token, password));
      setRequestSent(true);
    }
  }
  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h5">Enter your new password</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid className={classes.textField} item xs={12}>
            <TextField
              name="password"
              defaultValue=""
              variant="outlined"
              placeholder="Email"
              label="password"
              type="password"
              fullWidth
              required
              onChange={onChange}
            />
          </Grid>
          <Grid className={classes.textField} item xs={12}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Reset Password
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
