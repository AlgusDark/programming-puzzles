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
  let hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 0;
    } else {
      pairs += hash[nums[i]] += 1;
    }
  }

  /**
   * It can be solved by looping from a starting point
   * Time: O(n^2), Space O(1)
   * 
   *       for (let i = 0; i < nums.length - 1; i++) {
   *         for (let j = i + 1; j < nums.length; j++) {
   *           if (nums[i] == nums[j]) pairs++;
   *         }
   *       }
   */

  /**
   * It also can be solved by using the Summation formula `Σ = n(n+1)/2`
   * Time: O(n), Space O(n)
   * 
   *       for (let i = 0; i < nums.length; i++) {
   *         if (hash[nums[i]] === undefined) {
   *           hash[nums[i]] = 0;
   *         } else {
   *           hash[nums[i]] += 1;
   *         }
   *       }
   * 
   *       for (let value of Object.values(hash)) {
   *         pairs += value * (value + 1) / 2;
   *       }
   */

  return pairs;
}

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
