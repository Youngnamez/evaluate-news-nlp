// Import the js file to test
import { regexCheck } from "../src/client/js/nameChecker"

describe ("Testing the nameChecker functionality", () => {
    test("Testing nameChecker()", () => {
    
        expect(regexCheck).toBeDefined();
        expect(regexCheck("HI")).toEqual(true);
        expect(regexCheck("0129HI1223")).toEqual(false);
    })
})