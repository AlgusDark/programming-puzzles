import { assertEquals } from "testing/asserts.ts";

/**
 * Given a `string`, you need to tell if it is a lapindrome.
 * 
 * Lapindrome is defined as a string which when split in the middle,
 * gives two halves having the same characters and same frequency of
 * each character. If there are odd number of characters in the string,
 * we ignore the middle character and check for lapindrome. For example
 * **gaga** is a lapindrome, since the two halves **ga** and **ga** have
 * the same characters with same frequency. Also, **abccab**, **rotor** and
 * **xyzxy** are a few examples of lapindromes. Note that **abbaab** is NOT
 * a lapindrome. The two halves contain the same characters but their
 * frequencies do not match.
 */
function lapindrome(str: string) {
  /** Time: O(n) */
  if (str.trim().length < 1) return false; // It should be at least one char
  if (str.length === 1) return true; // One char is always a lapindrome
  if (str.length === 2) return str[0] === str[1] ? true : false; // comparing two chars is straightforward

  const half = str.length / 2;

  const [first, second] = [
    str.slice(0, half),
    str.slice(str.length % 2 !== 0 ? half + 1 : half, str.length), // If str is odd, we ignore the middle char
  ];

  const map = new Map();

  // We save in a hash with char as key and the occurrences as value.
  for (let index = 0; index < first.length; index++) {
    map.set(first[index], (map.get(first[index]) || 0) + 1);
    map.set(second[index], (map.get(second[index]) || 0) + 1);
  }

  // If value is odd, that means that char isn't balanced in the halfs.
  for (let value of map.values()) {
    if (value % 2 !== 0) return false;
  }

  return true;

  /**
   * You could sort and compare but it will take O(n log(n)) time
   * 
   * function sortArrayAndJoin(array: string[]) {
   *  return array.sort((a, b) => a.localeCompare(b)).join("");
   * }
   * return sortArrayAndJoin(first) === sortArrayAndJoin(second) ? true : false;
   */
}

Deno.test("lapindrome", () => {
  let fixtures = [{
    args: "6",
    expected: true,
  }, {
    args: "ab",
    expected: false,
  }, {
    args: "cc",
    expected: true,
  }, {
    args: "gaga",
    expected: true,
  }, {
    args: "abccab",
    expected: true,
  }, {
    args: "rotor",
    expected: true,
  }, {
    args: "xyzxy",
    expected: true,
  }, {
    args: "abbaab",
    expected: false,
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(lapindrome(args), expected);
  }
});
