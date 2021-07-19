// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  // const { user } = useSelector((state) => state.auth);

  return (
    <Route
      {...restProps}
      render={(props) => {
        // if (!user) {
        //   // not logged in so redirect to login page with the return url
        //   const { pathname } = props.location;
        //   if (pathname === '/') {
        //     return (window.location = `/`);
        //   }

        //   return (
        //     <Redirect
        //       to={{ pathname: '/login', state: { from: props.location } }}
        //     />
        //   );
        // }

        // if (userIsNew)
        //   return (
        //     <Redirect
        //       to={{ pathname: '/register', state: { from: props.location } }}
        //     />
        //   );

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
