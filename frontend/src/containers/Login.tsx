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

export default function Login(props: LoginProps): ReactElement | null {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<ILogin>({
    email: '',
    password: '',
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function onSubmit(e: React.MouseEvent<HTMLElement>) {
    //e.preventDefault();
    // login(emal, password)
    dispatch(login(formData.email, formData.password));
  }

  // is the user authenticated
  // Redirect to home page

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
            <Button
              variant="contained"
              color="primary"
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                onSubmit(event)
              }
            >
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
        </Grid>
      </Grid>
    </Container>
  );
}
