/* globals ENVIRONMENT */
/* eslint-disable react/no-danger */
import React from 'react';

function renderInitialState(initialState) {
  const innerHtml = `window.INITIAL_STATE = ${JSON.stringify(initialState)}`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

function renderEnvironment() {
  const innerHtml = `window.ENVIRONMENT = '${ENVIRONMENT}'`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

const Template = ({ content, head, initialState }) => (
  <html lang="en">
    <body>
      <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
      {initialState && renderInitialState(initialState)}
      <script src={!process.env.NODE_ENV ? '/app.js' : '/app.min.js'} />
    </body>
  </html>
);

export default Template;
