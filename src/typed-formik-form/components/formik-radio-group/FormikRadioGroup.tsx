import { Radio, RadioGroup, RadioGroupProps, RadioProps } from '@navikt/ds-react';
import React, { useContext } from 'react';
import { FastField, Field, FieldProps } from 'formik';
import { TestProps, TypedFormInputValidationProps, UseFastFieldProps } from '../../types';
import { getFeilPropForFormikInput } from '../../utils/typedFormErrorUtils';
import { TypedFormikFormContext } from '../typed-formik-form/TypedFormikForm';

type FormikRadioProp = Omit<RadioProps, 'children'> & {
    label: React.ReactNode;
} & TestProps;

interface OwnProps<FieldName> extends Omit<RadioGroupProps, 'name' | 'onChange' | 'children' | 'radios'> {
    name: FieldName;
    radios: FormikRadioProp[];
}

export type FormikRadioGroupProps<FieldName, ErrorType> = OwnProps<FieldName> &
    TypedFormInputValidationProps<FieldName, ErrorType> &
    UseFastFieldProps &
    TestProps;

function FormikRadioGroup<FieldName, ErrorType>({
    name,
    validate,
    radios,
    error,
    useFastField,
    ...restProps
}: FormikRadioGroupProps<FieldName, ErrorType>) {
    const context = useContext(TypedFormikFormContext);
    const FieldComponent = useFastField ? FastField : Field;
    return (
        <FieldComponent validate={validate ? (value: any) => validate(value, name) : undefined} name={name}>
            {({ field, form }: FieldProps) => {
                return (
                    <RadioGroup {...restProps} error={getFeilPropForFormikInput({ field, form, context, error })}>
                        {radios.map((rb, idx) => {
                            const isSelected = field.value === rb.value;
                            return (
                                <Radio
                                    key={idx}
                                    {...rb}
                                    name={name as any}
                                    checked={isSelected}
                                    onChange={(evt) => {
                                        form.setFieldValue(field.name, evt.target.value);
                                        if (context) {
                                            context.onAfterFieldValueSet();
                                        }
                                    }}>
                                    {rb.label}
                                </Radio>
                            );
                        })}
                    </RadioGroup>
                );
            }}
        </FieldComponent>
    );
}

export default FormikRadioGroup;
