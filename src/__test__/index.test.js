import { splitArrByNum } from '../index';

describe("test of string reverse function", () => {
    it(`привет, 2 == ["Те", "Ви", "Рп"]`, () => {
        expect(splitArrByNum("привет", 2)).toStrictEqual(["Те", "Ви", "Рп"]);
    });
    it("empty string, 2 == empty array", () => {
        expect(splitArrByNum("", 2)).toStrictEqual([""]);
    });
    it("no, 2 == On", () => {
        expect(splitArrByNum("no", 2)).toStrictEqual(["On"]);
    });
    it("letter, 1 == letter", () => {
        expect(splitArrByNum("letter", 1)).toStrictEqual(["ReTtEl"]);
    });
    it("yes, 3 == yes", () => {
        expect(splitArrByNum("yes", 3)).toStrictEqual(["SeY"]);
    });
});
