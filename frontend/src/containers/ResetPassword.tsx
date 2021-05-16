import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';

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
export interface ResetPasswordProps {}

export default function ResetPassword(
  props: ResetPasswordProps
): ReactElement | null {
  const classes = useStyles();
  function onSubmit() {
    console.log('submit');
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
