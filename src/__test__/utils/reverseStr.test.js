import { reverseStr } from '../../ulits/reverseStr';

beforeAll(() => {
    console.log("start tests");
});

afterAll(() => {
    console.log("end tests");
});

describe("test of string reverse function", () => {
    it("привет == тевирп", () => {
        expect(reverseStr("привет")).toBe("тевирп");
    });
    xit("empty == empty", () => {
        expect(reverseStr("")).toBe("");
    });
});
