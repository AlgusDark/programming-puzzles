# Running sum

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.
Return the running sum of `nums`.

## Examples

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

## Template

_running_sum_test.ts_

```ts
function runningSum(nums: number[]) {
  // Write your solution
}

Deno.test("runningSum", () => {
  let fixtures = [
    {
      args: [1, 2, 3, 4],
      expected: [1, 3, 6, 10],
    },
    {
      args: [1, 1, 1, 1, 1],
      expected: [1, 2, 3, 4, 5],
    },
    {
      args: [3, 1, 2, 10, 1],
      expected: [3, 4, 6, 16, 17],
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(runningSum(args), expected);
  }
});
```
