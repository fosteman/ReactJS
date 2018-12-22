function truncate(string, length) {
    if (string.length > length)
        return string.slice(0, length) + '...';
    else
        return string;
}
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
function camelCase(string) {
    let words = string.split(/[\s|\-|_]+/);
    return [
        words[0].toLowerCase(),
        ...words.slice(1).map((word) => capitalize(word)),
    ].join('');
}
const Modash = {
  truncate,
  capitalize,
  camelCase,
};
export default Modash;
