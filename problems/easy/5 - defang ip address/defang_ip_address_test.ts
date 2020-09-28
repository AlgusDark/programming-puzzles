import { assertEquals } from "testing/asserts.ts";

/**
 * Given a valid (IPv4) IP `address`, return a defanged version of that IP address.
 * A defanged IP address replaces every period `"."` with `"[.]"`.
 * 
 * **Constraints:** The given address is a valid IPv4 address.
 * 
 *       @example
 *       Input: address = "1.1.1.1"
 *       Output: "1[.]1[.]1[.]1"
 * 
 *       @example
 *       Input: address = "255.100.50.0"
 *       Output: "255[.]100[.]50[.]0"
 */
function defangIPaddr(address: string) {
  /** Time: O(n) */
  let defanged = "";
  for (let index = 0; index < address.length; index++) {
    const str = address[index];
    if (str === ".") {
      defanged += "[.]";
    } else {
      defanged += str;
    }
  }

  /**
   * You could split and join, but that will increase the space
   * by creating a new array
   *      
   *       return address.split('.').join('[.]')
   * 
   * You could use replaceAll, but where is all the fun? :)
   * 
   *       return address.replaceAll(".", "[.]")
   */

  return defanged;
}

Deno.test("defangIPaddr", () => {
  let fixtures = [{
    args: "1.1.1.1",
    expected: "1[.]1[.]1[.]1",
  }, {
    args: "255.100.50.0",
    expected: "255[.]100[.]50[.]0",
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(defangIPaddr(args), expected);
  }
});
