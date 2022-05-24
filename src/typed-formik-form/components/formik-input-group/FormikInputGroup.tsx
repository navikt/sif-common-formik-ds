import { Fieldset, FieldsetProps } from '@navikt/ds-react';
import React from 'react';
import { FastField, Field, FieldProps } from 'formik';
import { TypedFormInputValidationProps, UseFastFieldProps } from '../../types';
import { getFeilPropForFormikInput } from '../../utils/typedFormErrorUtils';
import { TypedFormikFormContext } from '../typed-formik-form/TypedFormikForm';
import './formikInputGroup.less';

interface OwnProps<FieldName> extends Omit<FieldsetProps, 'name'> {
    name: FieldName;
}

export type FormikInputGroupProps<ErrorType, FieldName> = OwnProps<FieldName> &
    TypedFormInputValidationProps<FieldName, ErrorType> &
    UseFastFieldProps;

function FormikInputGroup<ErrorType, FieldName>({
    name,
    error,
    validate,
    useFastField,
    ...restProps
}: FormikInputGroupProps<ErrorType, FieldName>) {
    const context = React.useContext(TypedFormikFormContext);
    const FieldComponent = useFastField ? FastField : Field;
    return (
        <FieldComponent validate={validate ? (value: any) => validate(value, name) : undefined} name={name}>
            {({ field, form }: FieldProps) => {
                return (
                    <Fieldset
                        {...restProps}
                        error={getFeilPropForFormikInput({ field, form, context, error })}></Fieldset>
                );
            }}
        </FieldComponent>
    );
}
export default FormikInputGroup;
