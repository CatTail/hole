## Question

Git cannot add a completely empty director, how to add empty directory to git?

## Solution

Take `path/to/empty-directory` as an example,

```
$ touch path/to/empty-directory/.gitkeep
$ git add path/to/empty-directory/.gitkeep
```

`path/to/empty-directory` will be reserved by git.

If you wan't to ignore the directory, for example it's used to generate build files,
add `.gitkeep` before add directory to `.gitignore`.

## Referrence

* http://stackoverflow.com/questions/7229885/what-are-the-differences-between-gitignore-and-gitkeep
