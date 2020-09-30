# Kids with candies

Given a `string`, you need to tell if it is a lapindrome.

Lapindrome is defined as a string which when split in the middle,
gives two halves having the same characters and same frequency of
each character. If there are odd number of characters in the string,
we ignore the middle character and check for lapindrome. For example
**gaga** is a lapindrome, since the two halves **ga** and **ga** have
the same characters with same frequency. Also, **abccab**, **rotor** and
**xyzxy** are a few examples of lapindromes. Note that **abbaab** is NOT
a lapindrome. The two halves contain the same characters but their
frequencies do not match.

## ExampleS

```
Input: "gaga"
Output: true

Input: "ab"
Output: false
```

## Template

_lapindrome_test.ts_

```ts
function lapindrome(str: string) {
  // Write your solution
}

Deno.test("lapindrome", () => {
  let fixtures = [
    {
      args: "6",
      expected: true,
    },
    {
      args: "ab",
      expected: false,
    },
    {
      args: "cc",
      expected: true,
    },
    {
      args: "gaga",
      expected: true,
    },
    {
      args: "abccab",
      expected: true,
    },
    {
      args: "rotor",
      expected: true,
    },
    {
      args: "xyzxy",
      expected: true,
    },
    {
      args: "abbaab",
      expected: false,
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(lapindrome(args), expected);
  }
});
```
