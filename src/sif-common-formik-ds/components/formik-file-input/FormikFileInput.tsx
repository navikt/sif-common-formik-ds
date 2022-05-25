import React from 'react';
import { ArrayHelpers, Field, FieldArray, FieldProps } from 'formik';
import { FormError, TypedFormInputValidationProps } from '../../types';
import { getErrorPropForFormikInput } from '../../utils/typedFormErrorUtils';
import { TypedFormikFormContext } from '../typed-formik-form/TypedFormikForm';
import FileInput from './file-input/FileInput';
import { TextFieldProps } from '@navikt/ds-react';

interface OwnProps<FieldName> {
    name: FieldName;
    label: string;
    accept: string;
    multiple?: boolean;
    error?: FormError;
    onFilesSelect: (files: File[], arrayHelpers: ArrayHelpers) => void;
    onClick?: () => void;
}

export type FormikFileInputProps<FieldName> = OwnProps<FieldName> & Omit<TextFieldProps, ''>;

function FormikFileInput<FieldName, ErrorType>({
    label,
    name,
    accept,
    multiple = true,
    validate,
    onFilesSelect,
    description,
    error,
    onClick,
}: FormikFileInputProps<FieldName> & TypedFormInputValidationProps<FieldName, ErrorType>) {
    const context = React.useContext(TypedFormikFormContext);

    return (
        <FieldArray
            name={`${name}`}
            render={(arrayHelpers) => (
                <Field validate={validate ? (value: any) => validate(value, name) : undefined} name={name}>
                    {({ field, form }: FieldProps) => {
                        return (
                            <FileInput
                                id={field.name}
                                name={field.name}
                                label={label}
                                onClick={onClick}
                                onFilesSelect={(files) => onFilesSelect(files, arrayHelpers)}
                                multiple={multiple}
                                accept={accept}
                                error={getErrorPropForFormikInput({ field, form, context, error })}
                                description={description}
                            />
                        );
                    }}
                </Field>
            )}
        />
    );
}

export default FormikFileInput;
