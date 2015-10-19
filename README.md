# staticserver-reload
Node.js static fileserver and [reload-module](//www.npmjs.com/package/reload) for refreshing browser on front-end development.

Uses [supervisor](//github.com/petruisfan/node-supervisor) for restarting node-server.

Install supervisor globally:
```
npm install supervisor -g
```
Add reload-script to your html-file:
```
<script src='/reload/reload.js'></script>

or with jade:
script(src='/reload/reload.js')
```

Place your served files in the public-directory or change the directory name in server.js:
```
var publicDir = path.join(__dirname, 'public')
```

Default port is 3000 or change in server.js:
````
app.set('port', process.env.PORT || 3000)
````

Run with `npm start` and browse to `http://localhost:3000`
