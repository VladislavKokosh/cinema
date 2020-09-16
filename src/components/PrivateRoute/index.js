import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest }) => {
    const film = useSelector(state => state.films.filmById)
    const hall = useSelector(state => state.halls.hallById)
    const session = useSelector(state => state.sessions.sessionById)
    const places = useSelector(state => state.places.choisePlaces)
    const filledData = film !== null && hall !== null && session !== null && places.length !== 0 ? true : false
    return (
        <Route
        {...rest}
        render={(props) => (
            filledData
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
