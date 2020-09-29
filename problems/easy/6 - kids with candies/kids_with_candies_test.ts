import { assertEquals } from "testing/asserts.ts";

/**
 * Given the array candies and the integer `extraCandies`, where `candies[i]`
 * represents the number of candies that the **ith** kid has.
 * 
 * For each kid check if there is a way to distribute `extraCandies` among the kids
 * such that he or she can have the **greatest** number of candies among them.
 * Notice that multiple kids can have the **greatest** number of candies.
 * 
 *       @example
 *       Input: candies = [2,3,5,1,3], extraCandies = 3
 *       Output: [true,true,true,false,true] 
 *       Explanation: 
 *       Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
 *       Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
 *       Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
 *       Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
 *       Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
 * 
 *       @example
 *       Input: candies = [4,2,1,1,2], extraCandies = 1
 *       Output: [true,false,false,false,false] 
 *       Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
 * 
 *       @example
 *       Input: candies = [12,1,12], extraCandies = 10
 *       Output: [true,false,true]
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  /** Time: O(n) */
  let max = Math.max(...candies);

  return candies.map((kid) => kid + extraCandies >= max);
}

Deno.test("kidWithCandies", () => {
  let fixtures = [{
    args: {
      candies: [2, 3, 5, 1, 3],
      extraCandies: 3,
    },
    expected: [true, true, true, false, true],
  }, {
    args: {
      candies: [4, 2, 1, 1, 2],
      extraCandies: 1,
    },
    expected: [true, false, false, false, false],
  }, {
    args: {
      candies: [12, 1, 12],
      extraCandies: 10,
    },
    expected: [true, false, true],
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args: { candies, extraCandies }, expected } = fixtures[index];
    assertEquals(kidsWithCandies(candies, extraCandies), expected);
  }
});
