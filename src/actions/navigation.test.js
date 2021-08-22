const navigation = require("./navigation")
// @ponicode
describe("navigation.toggleSidebar", () => {
    test("0", () => {
        let callFunction = () => {
            navigation.toggleSidebar()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("navigation.closeSidebar", () => {
    test("0", () => {
        let callFunction = () => {
            navigation.closeSidebar()
        }
    
        expect(callFunction).not.toThrow()
    })
})
