import { assertEquals } from "testing/asserts.ts";

/**
 * Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.
 * Return the running sum of `nums`.
 * 
 *       @example
 *       Input: nums = [1,2,3,4]
 *       Output: [1,3,6,10]
 *       Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 * 
 *       @example
 *       Input: nums = [1,1,1,1,1]
 *       Output: [1,2,3,4,5]
 *       Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 */
function runningSum(nums: number[]) {
  /** Time: O(n), Space: O(1) */
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;

  /**
   * You can also use a map/reducer
   *       return nums.map((num) => acc += num);
   * 
   * But that will use Space O(n)
   */
}

Deno.test("runningSum", () => {
  let fixtures = [{
    args: [1, 2, 3, 4],
    expected: [1, 3, 6, 10],
  }, {
    args: [1, 1, 1, 1, 1],
    expected: [1, 2, 3, 4, 5],
  }, {
    args: [3, 1, 2, 10, 1],
    expected: [3, 4, 6, 16, 17],
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(runningSum(args), expected);
  }
});
