// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

describe ("Testing the nameChecker functionality", () => {
    test("Testing nameChecker()", () => {
    
        expect(checkForName).toBeDefined();
    })
})