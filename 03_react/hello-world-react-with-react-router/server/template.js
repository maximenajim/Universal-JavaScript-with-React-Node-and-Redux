const jsPath = 'bundle.js';

const template = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>My Universal React App</title>
    </head>
    <body>
        <div id="container"></div>
        <script type="text/javascript" src="${jsPath}"></script>
    </body>
</html>
`;

module.exports = template;
