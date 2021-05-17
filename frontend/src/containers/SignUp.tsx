import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import { signup } from '../store/users/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../intefaces';

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
export interface LoginProps {}
export interface ILogin {
  email: string;
  password: string;
}

export default function Login(): ReactElement | null {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const isAuthenticated = useSelector(
    (state: IState) => state.user.isAuthenticated
  );

  const [formData, setFormData] = useState<ILogin>({
    email: '',
    password: '',
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function onSubmit() {
    // login(emal, password)
    if ((formData.email, formData.password)) {
      dispatch(signup(formData.email, formData.password));
    } else {
      setError('Email and password cannot be empty');
    }
  }

  // is the user authenticated
  // Redirect to home page
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h5">Sign In to account</Typography>
        </Grid>
        {error && (
          <Grid className={classes.title} item xs={12}>
            <Typography variant="h5">{error}</Typography>
          </Grid>
        )}
        <Grid item xs={6}>
          <Grid className={classes.textField} item xs={12}>
            <TextField
              name="email"
              defaultValue=""
              variant="outlined"
              placeholder="Email"
              label="email"
              type="email"
              fullWidth
              required
              onChange={onChange}
            />
          </Grid>
          <Grid className={classes.textField} item xs={12}>
            <TextField
              name="password"
              defaultValue=""
              variant="outlined"
              placeholder="Password"
              label="password"
              type="password"
              fullWidth
              required
              onChange={onChange}
            />
          </Grid>
          <Grid className={classes.textField} item xs={12}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
