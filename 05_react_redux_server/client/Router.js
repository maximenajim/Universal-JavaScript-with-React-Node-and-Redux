/* global window, document */
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString, renderToStaticMarkup} from 'react-dom/server';
import { Router, match, RouterContext, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './Routes';
import Template from './containers/Template';
import configureStore from './configureStore';

const isClient = typeof document !== 'undefined';

if (isClient) {
  const store = configureStore(window.INITIAL_STATE);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('content'),
  );
}

function renderComponentWithRoot(RouterContext, componentProps, store) {
  const componentHtml = renderToString(
    <Provider store={store}>
      <RouterContext {...componentProps} />
    </Provider>,
  );

  const initialState = store.getState();
  const templateMarkup = renderToStaticMarkup(
    <Template content={componentHtml} initialState={initialState} />,
  );

  return `<!doctype html>\n${templateMarkup}`;
}

function handleError(res, error) {
  res.status(500).send(error.message);
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function routeIsUnmatched(renderProps) {
  return renderProps.routes[renderProps.routes.length - 1].path === '*';
}

function handleRoute(res, renderProps) {
  const store = configureStore();
  const status = routeIsUnmatched(renderProps) ? 404 : 200;
  const readyOnAllActions = renderProps.components
    .filter(component => component.readyOnActions)
    .map(component => component.readyOnActions(store.dispatch, renderProps.params));

  Promise
    .all(readyOnAllActions)
    .then(() => res.status(status)
      .send(renderComponentWithRoot(RouterContext, renderProps, store)));
}

function serverMiddleware(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      handleError(error);
    } else if (redirectLocation) {
      handleRedirect(res, redirectLocation);
    } else if (renderProps) {
      handleRoute(res, renderProps);
    } else {
      // This should actually never happen, as Routes.js has a catch-all '*' path.
      res.sendStatus(404);
    }
  });
}

export default serverMiddleware;
