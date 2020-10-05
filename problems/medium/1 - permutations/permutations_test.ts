import { assertEquals } from "testing/asserts.ts";

/**
 * Given a collection of `distinct integers`, return all possible `permutations`.
 *       @example
 *       Input: [1,2,3]
 *       Output: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
 */
function permutations(nums: number[]) {
  let result: number[][] = [];
  perms(nums, []);
  return result;

  function perms(nums: number[], acc: number[]) {
    if (nums.length === 0) {
      result.push(acc);
    } else {
      for (let i = 0; i < nums.length; i++) {
        perms(nums.slice(0, i).concat(nums.slice(i + 1)), [...acc, nums[i]]);
      }
    }
  }
}

Deno.test("permutations", () => {
  let fixtures = [{
    args: [1],
    expected: [[1]],
  }, {
    args: [1, 2],
    expected: [[1, 2], [2, 1]],
  }, {
    args: [1, 2, 3],
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(permutations(args), expected);
  }
});
