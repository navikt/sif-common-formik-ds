import React from 'react';
import { getTypedFormComponents } from '../../typed-formik-form/components/getTypedFormComponents';

enum Fields {
    checked = "checked"
}

interface FieldValues {
    [Fields.checked]?: boolean;
}

interface Props {}

const formComponents = getTypedFormComponents<Fields, FieldValues, FormikErrors>()

const ExampleForm: React.FunctionComponent<Props> = ({}) => {
    return <>
    <Formik
    </>
};

export default ExampleForm;
