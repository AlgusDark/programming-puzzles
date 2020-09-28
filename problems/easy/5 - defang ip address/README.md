# Running sum

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.
A defanged IP address replaces every period `"."` with `"[.]"`.

**Constraints:** The given address is a valid IPv4 address.

## Examples

```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

## Template

_defang_ip_address_test.ts_

```ts
function defangIPaddr(address: string) {
  // Write your solution
}

Deno.test("defangIPaddr", () => {
  let fixtures = [
    {
      args: "1.1.1.1",
      expected: "1[.]1[.]1[.]1",
    },
    {
      args: "255.100.50.0",
      expected: "255[.]100[.]50[.]0",
    },
  ];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(defangIPaddr(args), expected);
  }
});
```
