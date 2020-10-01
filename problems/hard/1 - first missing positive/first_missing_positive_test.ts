import { assertEquals } from "testing/asserts.ts";

/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 *       @example
 *       Input: [1,2,0]
 *       Output: 3
 * 
 *       @example
 *       Input: [3,4,-1,1]
 *       Output: 2
 *       @example
 *       Input: [7,8,9,11,12]
 *       Output: 1
 */
function firstMissingPositive(nums: Array<number | boolean>) {
  let size = nums.length;

  /**
   * Without using extra space, we can swap the current
   * position value to the correct one and add a boolean
   * flag `true` to know if it's in the correct position.
   * 
   * If the number to be changed is outside the range of
   * the array, we can flag it to `false`. 
   */
  for (let i = 0; i < size; i++) {
    let num = nums[i];
    if (typeof num === "number") { // if num is NAN, then it has been flagged
      swap(i, num - 1);
    }
  }

  /**
   * We check for the first `false` value.
   * If we found one, we sum that position + 1
   * to get the value of the missing number.
   */
  for (let i = 0; i < size; i++) {
    let num = nums[i];
    if (num === false) {
      return i + 1;
    }
  }

  return size + 1;

  /**
   * Function that swap two values from the array
   */
  function swap(from: number, to: number) {
    let num = nums[from];
    let numToMove = nums[to];

    // If number is in correct position,
    // then we don't need to do anything
    if (num === from + 1) {
      return;
    }

    // If number outbounds the size of the array
    // or we already have a correct position number
    // then we can safely flag it
    if (num > size || num <= 0 || nums[to] === true) {
      return nums[from] = false;
    }

    // We do the swap
    nums[to] = true;
    nums[from] = numToMove;

    // We recursively check for the current number
    // and start the swap procedure once again.
    if (typeof numToMove === "number" && numToMove !== from + 1) {
      swap(from, numToMove - 1);
    }
  }
}

Deno.test("first missing positive", () => {
  let fixtures = [{
    args: [1, 2, 3, 4, 5],
    expected: 6,
  }, {
    args: [5, 4, 3, 2, 1],
    expected: 6,
  }, {
    args: [-10, -11, 21],
    expected: 1,
  }, {
    args: [0, -1, 23, 20, 2, 1],
    expected: 3,
  }, {
    args: [2, 1],
    expected: 3,
  }, {
    args: [3, 4, -1, 1, 20],
    expected: 2,
  }, {
    args: [3, 4, 2, 1],
    expected: 5,
  }, {
    args: [1, 2, 0],
    expected: 3,
  }, {
    args: [-100, -234, -314, 12, 24, 6, 5, 4, 3, 2, 1, 0, 1],
    expected: 7,
  }, {
    args: [1, 1],
    expected: 2,
  }, {
    args: [2, 2],
    expected: 1,
  }, {
    args: [2],
    expected: 1,
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(firstMissingPositive(args), expected);
  }
});
