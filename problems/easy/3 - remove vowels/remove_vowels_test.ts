import { assertEquals } from "testing/asserts.ts";

/**
 * Given a string, remove the vowels from the string and return the string without vowels.
 * 
 *       @example 
 *       Input : what is your name ?
 *       Output : wht s yr nm ?
 * 
 */
function removeVowels(str: string) {
  /** Time: O(n) **/
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let index = 0; index < str.length; index++) {
    let letter = (str[index]).toLowerCase();

    if (!vowels.includes(letter)) {
      newStr += letter;
    }
  }

  /**
   * It could be solved with a regular expression:
   *       return str.replace(/[aeiou]/gi, ''); *
   */

  return newStr;
}

Deno.test("removeVowels", () => {
  let actual = removeVowels("what is your name ?");
  let expected = "wht s yr nm ?";

  assertEquals(actual, expected);
});
