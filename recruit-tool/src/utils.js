export const groupBy = function (groupFunc, array) {
    const result = {};
    for (let i = 0; i < array.length; i++) {
        const key = groupFunc(array[i]);
        (result[key] = result[key] || []).push(array[i])
    }
    return result;
}