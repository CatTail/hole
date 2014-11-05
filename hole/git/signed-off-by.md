## Question

With the following git commit message,

    Signed-off-by: cattail

git always complain

    Aborting commit due to empty commit message

## Solution

There is not documentation there, but it seemd that git will ignore the `Signed-off-by` line in commit message

The correct way to use `Signed-off-by` is

    What this commit for blanblanblan

    Signed-off-by: CatTail

