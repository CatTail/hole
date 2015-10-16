### Question

```c
#include <stdio.h>
int main() {
    char test[2][3] = {"asd", "asd"};
    char *asdf ="asdf";
    printf("%d %d %d %d %d %d %d %d %d", sizeof(int), sizeof(char), strlen("asdf"), sizeof("asdf"), sizeof(test), sizeof(test[0]), sizeof(test[1]), sizeof(asdf), strlen(asdf));
    printf("\n");
    printf("%d %c %s %d\n", sizeof(test[0][0]), test[0][0], test[0], sizeof(test[0]));
}
```

output

```
4 1 4 5 6 3 3 8 4
1 a asdasd 3
```

### Solution


### References
