import React from 'react';
import { TypedFormInputValidationProps, UseFastFieldProps } from '../../types';
import FormikDatepicker, { FormikDatepickerProps } from '../formik-datepicker/FormikDatepicker';
import FormikInputGroup from '../formik-input-group/FormikInputGroup';
import './dateIntervalPicker.scss';

export interface DateIntervalPickerProps<FieldName, ErrorType>
    extends TypedFormInputValidationProps<FieldName, ErrorType>,
        UseFastFieldProps {
    legend: string;
    fromDatepickerProps: FormikDatepickerProps<FieldName, ErrorType>;
    toDatepickerProps: FormikDatepickerProps<FieldName, ErrorType>;
    description?: React.ReactNode;
}

function FormikDateIntervalPicker<FieldName, ErrorType>({
    legend,
    fromDatepickerProps,
    toDatepickerProps,
    description,
    useFastField,
    validate,
}: DateIntervalPickerProps<FieldName, ErrorType>) {
    const name = `${fromDatepickerProps.name}_${toDatepickerProps.name}` as any;
    return (
        <FormikInputGroup
            name={name}
            validate={validate ? (value: any) => validate(value, name) : undefined}
            legend={legend}
            description={description}
            className="dateIntervalPicker">
            <div className="dateIntervalPicker__flexContainer">
                <FormikDatepicker<FieldName, ErrorType> {...fromDatepickerProps} useFastField={useFastField} />
                <FormikDatepicker<FieldName, ErrorType> {...toDatepickerProps} useFastField={useFastField} />
            </div>
        </FormikInputGroup>
    );
}

export default FormikDateIntervalPicker;
