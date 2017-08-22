# Application Platforms for Universal React
In this section we examine some of the open source application platforms and libraries for building Universal Web Applications that can help us in building production ready universal applications.  We look at electrode, mern, react-server and next.js.  For each of these platforms we describe what it offers, when you’d use it and walk through a live code examples using the platforms or library in each video.

## Why Universal Application Platforms?
Before jumping into the first platform.  It’d be good to start with the question of why we’d even need an application platforms to build universal applications?  In the last section we were able to build a universal application without using a platform. However, when projects get larger with many developers making changes, a platform offer the structure needed for developers to work efficiently with one another.  Platforms achieve this by providing some kind of Code/File structure as well as an application architecture.  These platforms also typically provide a command line utility or some kind of scaffolding to generate the initial application and the structure.  Many also offer optimizations for Server rendering to speed up and improved user experience.

# Electrode
Electrode is a platform for building universal React/Node.js applications with standardized structure, best practices, and modern technologies baked in. Electrode focuses on performance, component reusability, and simple deployment to multiple cloud providers.  The heart of the platform is Electrode Archetypes, which allow for standardized configurations and structure of the app and its associated react components. Electrode’s Archetype system helps streamlined development and deployment.

Code files for this video can be found here: https://github.com/electrode-io/electrode/tree/master/samples/universal-material-ui 

# Mern
The MERN stack is a well known JavaScript web app stacks consisting of MongoDB, Express, React, and Node.js.  MERN provides an end-to-end framework for building dynamic web applications; starting from the top (code running in the browser) to the bottom (database).  In these video series we’ve already discussed express, react and node.  MongoDB, on the other hand, is a document database used by back-end applications to store its data as JSON (JavaScript Object Notation) documents. A common theme in the MERN stack is JavaScript – every line of code written is in the same language.  Access even to the database using MongoDB's is idiomatic JavaScript/Node.js driver - that is, all interactions with the database is performed using familiar concepts such as JavaScript objects and asynchronous execution using either callback functions or promises.

Code files for this video can be found here: https://github.com/Hashnode/mern-starter 

# react-server
React-server is a framework designed to make universal React easier to write by providing standard solutions to thing like optimizing the delivery of JavaScript and CSS, ensuring that the site is streamed to the browser as quickly ad possible and making an app resilient when my backend has high latency spikes.  React-server aims to take care of everything that's needed to run and deploy real React server-rendered apps in production. Under the hood, react-server is doing clever optimizations, many borrowed from the ideas behind Facebook's Big Pipe.  React-server has the concept of a RootElement (Similar to the “pagelets” concept). Every page in a react-server app has multiple RootElements, and they stream down to the browser as soon as they are ready to render. That way, adding more content to a page at the bottom need not slow down above-the-fold paint. Also, by default, react-server implements a fault-tolerance strategy by leaving the HTTP connection from the server to the client open and not closing the HTML document with an </html> tag, to wait for any laggard data endpoints to return.  This way, the browser can paint for the user as early as possible despite a slow backend. 

Code files for this video can be found here: https://github.com/redfin/react-server/tree/master/packages/react-server-examples/meteor-site 

# Next.js
Next.js is a minimalistic framework for server-rendered React applications.  Next.js aims to provide a simple but customizable framework similar to the ease of PHP.  with webapps created with PHP, you’d create some files, write PHP code, then simply deploy them. You don't have to worry about routing much, and the app is rendered on the server by default. Instead of PHP, Next.js provides that simplistic approach for building apps with JavaScript and React. Next does server-rendered by default, supports automatic code splitting for faster page loads and simple client-side routing.

Code files for this video can be found here: https://github.com/zeit/next.js 
