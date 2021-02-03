const arr = [1, 0, 10, '0', '1', '', NaN, false, null, undefined, 'false', 'true'];
const truthyValues = arr.filter((e) => {
    return !!e;
})

alert( 'Truthy Values Are:' + truthyValues.join(', '));