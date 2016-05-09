## Question

Bus error occurs in when follow code executed:

```c
int main() {
    char a* = "asdf";
    a[2] = '\0';
    printf("%s", a);
}
```

## Solution

> As the initializer for an array of char, as in the declaration of char a[],
> it specifies the initial values of the characters in that array.
> Anywhere else, it turns into an unnamed, static array of characters,
> and this unnamed array may be stored in read-only memory,
> and which therefore cannot necessarily be modified.
 
```c
int main() {
    char a[] = "asdf";
    a[2] = '\0';
    printf("%s", a);
}
```

### References

  * [Why do I get a segmentation fault when writing to a string?](http://stackoverflow.com/questions/164194/why-do-i-get-a-segmentation-fault-when-writing-to-a-string)
