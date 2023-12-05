import { fenceStringStyle } from "./ulits/fenceStringStyle";
import { reverseStr } from "./ulits/reverseStr";

export function splitArrByNum(text, blob) {
    text = fenceStringStyle(reverseStr(text));
    let countRange = text.length / blob;
    let newArr = [];
    let newStr = "";
    if (text.length >= 2 && blob >= 2) {
        for (let i = 0; i < text.length; i += blob) {
            newStr = text.slice(i, i + blob);
            newArr.push(newStr)
        }
    } else {
        newArr = [text];
    }
    return newArr;
}
