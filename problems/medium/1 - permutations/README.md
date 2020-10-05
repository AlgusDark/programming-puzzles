# Permutations

Given a collection of `distinct integers`, return all possible `permutations`.

## Examples

```
Input: [1,2,3]
Output: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
```

## Template

_permutations_test.ts_

```ts
function permutations(str: string) {
  // Write your solution
}

Deno.test("permutations", () => {
  let fixtures = [
    {
      args: [1],
      expected: [[1]],
    },
    {
      args: [1, 2],
      expected: [
        [1, 2],
        [2, 1],
      ],
    },
    {
      args: [1, 2, 3],
      expected: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(permutations(args), expected);
  }
});
```
