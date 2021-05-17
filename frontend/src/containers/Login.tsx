import React, { ReactElement, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import { login } from '../store/users/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../intefaces';
import axios from 'axios';

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
    dispatch(login(formData.email, formData.password));
  }

  // is the user authenticated
  // Redirect to home page
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  async function onGoogle() {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_SELF_URL}/google`;
      const res = await axios.get(url);
      console.log(res.data.authorization_url);
      if (typeof window !== 'undefined') {
        window.location.replace(res.data.authorization_url);
      }
    } catch (e) {
      console.log('Continue with google fail', e);
    }
  }

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h5">Sign In to account</Typography>
        </Grid>
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
          <Grid className={classes.bottom} item xs={12}>
            <span>
              Don't have an accout? <Link to="/signup">SignUp</Link>
            </span>
            <span>
              Forgot your password?{' '}
              <Link to="/reset-password">Reset Password</Link>
            </span>
          </Grid>
          <Grid className={classes.textField} item xs={12}>
            <Button variant="contained" color="secondary" onClick={onGoogle}>
              Continue with Google
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
