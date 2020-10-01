# Kids with candies

Given an unsorted integer array, find the smallest missing positive integer.

**Solution should be in time O(n) with constant space O(1).**

## Examples

```
Input: [1,2,0]
Output: 3

Input: [3,4,-1,1]
Output: 2

Input: [7,8,9,11,12]
Output: 1
```

**Follow up:** Your algorithm should run in O(n) time and uses constant extra space.

## Template

_first_missing_positive_test.ts_

```ts
function firstMissingPositive(str: string) {
  // Write your solution
}

Deno.test("first missing positive", () => {
  let fixtures = [
    {
      args: [1, 2, 3, 4, 5],
      expected: 6,
    },
    {
      args: [5, 4, 3, 2, 1],
      expected: 6,
    },
    {
      args: [-10, -11, 21],
      expected: 1,
    },
    {
      args: [0, -1, 23, 20, 2, 1],
      expected: 3,
    },
    {
      args: [2, 1],
      expected: 3,
    },
    {
      args: [3, 4, -1, 1, 20],
      expected: 2,
    },
    {
      args: [3, 4, 2, 1],
      expected: 5,
    },
    {
      args: [1, 2, 0],
      expected: 3,
    },
    {
      args: [-100, -234, -314, 12, 24, 6, 5, 4, 3, 2, 1, 0, 1],
      expected: 7,
    },
    {
      args: [1, 1],
      expected: 2,
    },
    {
      args: [2, 2],
      expected: 1,
    },
    {
      args: [2],
      expected: 1,
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(firstMissingPositive(args), expected);
  }
});
```
