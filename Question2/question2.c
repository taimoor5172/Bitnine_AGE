#include <stdio.h>

// function for iterative approach
int fibonacciIterative(int n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else if (n == 2)
        return 2;

    int fib0 = 0, fib1 = 1, fib2 = 2;
    int fib;

    for (int i = 3; i <= n; i++)
    {
        fib = fib0 + fib1;
        fib0 = fib1;
        fib1 = fib2;
        fib2 = fib;
    }

    return fib;
}

// function for Dynamic Approach
int fibonacciDynamic(int n)
{
    int fib[n + 1];
    fib[0] = 0;
    fib[1] = 1;
    fib[2] = 2;

    for (int i = 3; i <= n; i++)
    {
        fib[i] = fib[i - 3] + fib[i - 2];
    }

    return fib[n];
}

// function for Recursive Approach
int fibonacciRecursive(int n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else if (n == 2)
        return 2;
    else
        return fibonacciRecursive(n - 3) + fibonacciRecursive(n - 2);
}

int main()
{

    printf("Iterative Approach : %d\n", fibonacciIterative(4));
    printf("Recursive Approach : %d\n", fibonacciRecursive(4));
    printf("Dynamic Approach : %d\n", fibonacciDynamic(4));

    // return 0;
}