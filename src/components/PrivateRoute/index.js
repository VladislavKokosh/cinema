import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest }) => {
  const isAuthorized = localStorage.getItem('autorization') !== null ? true : false;

  return (
    <Route
      {...rest}
      render={props => (
        isAuthorized
          ? <Component {...props}/>
          : <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }}
            />
      )}
    />
  );
}

export default PrivateRoute;