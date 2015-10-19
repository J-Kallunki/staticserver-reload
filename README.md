# staticserver-reload
Node.js static fileserver and [reload-module](//www.npmjs.com/package/reload) for refreshing browser on front-end development
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
