export type FieldValidatorType= (value:string) => string |undefined
export const required:FieldValidatorType = (value) => {
    if (value) return undefined;
    return "Field is required";
};
export const maxLengthCreator = (maxlength:number):FieldValidatorType => (value) => {
    if (value.length > maxlength) return `max length is ${maxlength} symbols`;
    // обратные кавычки и знак $
    return undefined;
};