import { assertEquals } from "testing/asserts.ts";
/**
 * Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.
 *
 * Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.
 *
 * **Constraints:** nums.length == 2n
 *
 *       @example
 *       Input: nums = [2,5,1,3,4,7], n = 3
 *       Output: [2,3,5,4,1,7]
 *       Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
 *
 *       @example
 *       Input: nums = [1,2,3,4,4,3,2,1], n = 4
 *       Output: [1,4,2,3,3,2,4,1]
 *
 *       @example
 *       Input: nums = [1,1,2,2], n = 2
 *       Output: [1,2,1,2]
 */
function shuffle(nums: number[], n: number) {
  if (nums.length !== n * 2) return null;

  let array = [];

  for (let index = 0; index < n; index++) {
    array.push(nums[index], nums[n + index]);
  }

  return array;
}

/** Time: O(n) */
Deno.test("shuffle", () => {
  let fixtures = [
    {
      args: {
        nums: [2, 5, 1, 3, 4, 7],
        n: 3,
      },
      expected: [2, 3, 5, 4, 1, 7],
    },
    {
      args: {
        nums: [1, 2, 3, 4, 4, 3, 2, 1],
        n: 4,
      },
      expected: [1, 4, 2, 3, 3, 2, 4, 1],
    },
    {
      args: {
        nums: [1, 1, 2, 2],
        n: 2,
      },
      expected: [1, 2, 1, 2],
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const {
      args: { nums, n },
      expected,
    } = fixtures[index];
    assertEquals(shuffle(nums, n), expected);
  }
});
