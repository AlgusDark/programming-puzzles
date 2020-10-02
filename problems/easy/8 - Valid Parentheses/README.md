# Valid Parentheses

Given a string `str` containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

**Constraints:**

- 1 <= s.length <= 10^4
- `str` consists of parentheses only `'()[]{}'`.

## Examples

```
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true
```

## Template

_is_valid.ts_

```ts
function isValid(str: string) {
  // Write your solution
}

Deno.test("isValid", () => {
  let fixtures = [
    {
      args: "()",
      expected: true,
    },
    {
      args: "()[]{}",
      expected: true,
    },
    {
      args: "(]",
      expected: false,
    },
    {
      args: "([)]",
      expected: false,
    },
    {
      args: "[",
      expected: false,
    },
    {
      args: "]",
      expected: false,
    },
    {
      args: "{[]}",
      expected: true,
    },
    {
      args: "(([{[]}]))",
      expected: true,
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(isValid(args), expected);
  }
});
```
