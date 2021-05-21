import { Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { logout } from '../store/users/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { IState, IUser } from '../intefaces';
import { Box, Avatar } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& a': {
        textDecoration: 'none',
        color: 'inherit',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state: IState) => state.user.user);
  const isAuthenticated = useSelector(
    (state: IState) => state.user.isAuthenticated
  );

  function handleLogout() {
    dispatch(logout());
  }

  const GuestLinks = () => (
    <Fragment>
      <Button color="inherit">
        <Link to="/login">Login</Link>
      </Button>
      <Button color="inherit">
        <Link to="/signup">SignUp</Link>
      </Button>
    </Fragment>
  );
  interface IAuthLinksProps {
    user: IUser | null;
  }
  const AuthLinks = ({ user }: IAuthLinksProps) => (
    <Fragment>
      <Button>
        <Avatar className={classes.orange} alt={user?.email}>
          {user?.email.charAt(0).toUpperCase()}
        </Avatar>
      </Button>
      <Button color="inherit">{user?.email}</Button>
      <Button color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Home</Link>
          </Typography>
          <Box>
            {isAuthenticated ? <AuthLinks user={user} /> : <GuestLinks />}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
