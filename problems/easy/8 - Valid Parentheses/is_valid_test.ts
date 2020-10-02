import { assertEquals } from "testing/asserts.ts";

/**
 * Given a string `str` containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.
 * 
 * An input string is valid if:
 *   - Open brackets must be closed by the same type of brackets.
 *   - Open brackets must be closed in the correct order.
 * 
 * **Constraints:**
 *   - 1 <= s.length <= 10^4
 *   - `str` consists of parentheses only `'()[]{}'`.
 * 
 *       @example
 *       Input: s = "()"
 *       Output: true
 * 
 *       @example
 *       Input: s = "()[]{}"
 *       Output: true
 * 
 *       @example
 *       Input: s = "(]"
 *       Output: false
 * 
 *       @example
 *       Input: s = "([)]"
 *       Output: false
 * 
 *       @example
 *       Input: s = "{[]}"
 *       Output: true
 */
function isValid(str: string) {
  let hash = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  let stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    let value = hash.get(str[i]);

    if (value) {
      stack.push(value);
    } else if (stack.length === 0 || stack.pop() !== str[i]) {
      return false;
    }
  }

  return stack.length === 0;
}

Deno.test("isValidParentheses", () => {
  let fixtures = [{
    args: "()",
    expected: true,
  }, {
    args: "()[]{}",
    expected: true,
  }, {
    args: "(]",
    expected: false,
  }, {
    args: "([)]",
    expected: false,
  }, {
    args: "[",
    expected: false,
  }, {
    args: "]",
    expected: false,
  }, {
    args: "{[]}",
    expected: true,
  }, {
    args: "(([{[]}]))",
    expected: true,
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(isValid(args), expected);
  }
});
