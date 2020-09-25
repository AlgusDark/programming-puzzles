import { assertEquals } from "testing/asserts.ts";
/**
 * Given an array of integers nums.
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * Return the number of good pairs.
 * 
 *       @example
 *       Input: nums = [1,2,3,1,1,3]
 *       Output: 4
 *       Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 * 
 *       @example
 *       Input: nums = [1,1,1,1]
 *       Output: 6
 *       Explanation: Each pair in the array are good.
 * 
 *       @example
 *       Input: nums = [1,2,3]
 *       Output: 0
 */
function numIdenticalPairs(nums: number[]) {
  let pairs = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) pairs++;
    }
  }

  return pairs;
}

/** Time: O(n) */
Deno.test("numIdenticalPairs", () => {
  let fixtures = [{
    args: [1, 2, 3, 1, 1, 3],
    expected: 4,
  }, {
    args: [1, 1, 1, 1],
    expected: 6,
  }, {
    args: [1, 2, 3],
    expected: 0,
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(numIdenticalPairs(args), expected);
  }
});
