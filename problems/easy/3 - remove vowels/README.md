# Shuffle Array

Given a string, remove the vowels from the string and return the string without vowels.

## Examples

```
Input : what is your name ?
Output : wht s yr nm ?
```

## Template

_remove_vowels_test.ts_

```ts
import { assertEquals } from "testing/asserts.ts";

function removeVowels(str: string) {
  // Write your solution
}

Deno.test("removeVowels", () => {
  let actual = removeVowels("what is your name ?");
  let expected = "wht s yr nm ?";

  assertEquals(actual, expected);
});
```
