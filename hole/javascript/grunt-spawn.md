## Question

`child_process.spawn` in grunt don't output.

```javascript
grunt.registerMultiTask('taskName', 'description', function() {
    var child = spawn('ls', [], { stdio: 'inherit' }); 
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
});
```

## Solution

grunt will exit if you don't tell him task is async.

```javascript
grunt.registerMultiTask('taskName', 'description', function() {
    var done = this.async();
    var child = spawn('ls', [], { stdio: 'inherit'  });
    var stdout = new Buffer('');
    var stderr = new Buffer('');
    if (child.stdout) {
        child.stdout.on('data', function(buf) {
            stdout = Buffer.concat([stdout, new Buffer(buf)]);
        });
    }
    if (child.stderr) {
        child.stderr.on('data', function(buf) {
            stderr = Buffer.concat([stderr, new Buffer(buf)]);
        });
    }
    child.on('close', function(code) {
        done(code);
    });
});
```

Or use `grunt.util.spawn`

```javascript
grunt.registerMultiTask('taskName', 'description', function() {
    var done = this.async();
    grunt.util.spawn({
        cmd: 'ls',
        args: [],
        opts: {
            stdio: 'inherit',
        }
    }, function() {
        done();
    });
});
```

## References

  * [grunt-legacy-util](https://github.com/gruntjs/grunt-legacy-util/blob/master/index.js)
  * [grunt-util-spawn-doesnt-give-output](http://stackoverflow.com/questions/20806839/grunt-util-spawn-doesnt-give-output)
