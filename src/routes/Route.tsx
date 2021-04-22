import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect
} from 'react-router-dom';

import {useAuth} from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest}) => {
    const { user } = useAuth();
    return (
        <ReactDOMRoute
            {...rest}
            render={( { location }) => {
                return (isPrivate === !!user) || (!!user) ? (
                    <Component />
                ) : (
                    <Redirect to={{
                        pathname: isPrivate ? '/' : '/Dashboard',
                        state: { from: location},
                    }}/>
                )
            }}
        />
    );
};

export default Routes;
