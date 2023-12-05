export function reverseStr(str) {
    return str == "" ? "" : reverseStr(str.slice(1)) + str[0];
}
