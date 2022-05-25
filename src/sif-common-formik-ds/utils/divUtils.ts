import { InputWidths } from '../types';

export const getInputWidthClassName = (
    width: InputWidths | undefined,
    otherClassName: string | undefined
): string | undefined => {
    const allClassNames: string[] = [];
    if (width) {
        allClassNames.push(`formikTextField--${width}`);
    }
    if (otherClassName) {
        allClassNames.push(otherClassName);
    }
    return allClassNames.length > 0 ? allClassNames.join(' ') : undefined;
};
