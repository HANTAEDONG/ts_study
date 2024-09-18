/**
 * Spread Operator
 */
const onlyString = ["1", "2", "3", "4"];
const onlyNumbers = [1, 2, 3, 4];
const arr1 = [...onlyString]; // string []로 추론
const arr2 = [...onlyString, ...onlyNumbers]; // (string | number)[]
