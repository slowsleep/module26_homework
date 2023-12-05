import { fenceStringStyle } from "../../ulits/fenceStringStyle";

describe("test fenceStringStyle function ", () => {
    it("привет -> ПрИвЕт", () => {
        expect(fenceStringStyle("привет")).toBe("ПрИвЕт");
    });
    it("empty -> empty", () => {
        expect(fenceStringStyle("")).toBe("");
    });
    it("0 -> empty string", () => {
        expect(fenceStringStyle(0)).toBe("");
    });
});
