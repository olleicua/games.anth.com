const routes = [
  ['/', '/views/index.html'],
  ['/chat', '/views/index.html'],
];

const connectStaticRoute = (app, requestedPath, staticFilePath) => {
  app.get(requestedPath, (request, response) => {
    response.sendFile(__dirname + staticFilePath);
  });
};

module.exports = {
  connect: (app) => {
    let i, requestedPath, staticFilePath;
    for (i = 0; i < routes.length; i++) {
      connectStaticRoute(app, routes[i][0], routes[i][1]);
    }
  }
};
