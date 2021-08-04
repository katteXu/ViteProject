import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const Camera = React.lazy(() => import('../pages/Camera'));
const Equipment = React.lazy(() => import('../pages/Equipment'));
const RouterContainer: React.FC = () => (
  <React.Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/camera" component={Camera} />
      <Route path="/equipment" component={Equipment} />
      <Redirect to="/" />
    </Switch>
  </React.Suspense>
);

// 全局loading
const Loading = () => <Spin size="large" className="main-loading" />;

export default RouterContainer;
