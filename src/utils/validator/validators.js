export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
};
export const maxLengthCreator = (maxlength) => (value) => {
    if (value.length > maxlength) return `max length is ${maxlength} symbols`;
    // обратные кавычки и знак $
    return undefined;
};