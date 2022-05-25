import React from 'react';
import { TestProps, TypedFormInputValidationProps, YesOrNo } from '../../types';
import FormikRadioGroup, { FormikRadioGroupProps } from '../formik-radio-group/FormikRadioGroup';

export interface FormikYesOrNoQuestionProps<FieldName, ErrorType>
    extends TestProps,
        Omit<FormikRadioGroupProps<FieldName, ErrorType>, 'radios'> {
    labels?: {
        [YesOrNo.YES]?: string;
        [YesOrNo.NO]?: string;
    };
}

function FormikYesOrNoQuestion<FieldName, ErrorType>({
    name,
    labels,
    ...restProps
}: FormikYesOrNoQuestionProps<FieldName, ErrorType> & TypedFormInputValidationProps<FieldName, ErrorType>) {
    const { yes: yesLabel = 'Ja', no: noLabel = 'Nei' } = labels || {};
    const testKey = restProps['data-testkey'];
    delete restProps['data-testkey'];

    return (
        <FormikRadioGroup<FieldName, ErrorType>
            data-testkey={testKey}
            {...restProps}
            radios={[
                { label: yesLabel, value: YesOrNo.YES, ['data-testkey']: testKey ? `${testKey}_yes` : undefined },
                { label: noLabel, value: YesOrNo.NO, ['data-testkey']: testKey ? `${testKey}_no` : undefined },
            ]}
            name={name}
        />
    );
}

export default FormikYesOrNoQuestion;
