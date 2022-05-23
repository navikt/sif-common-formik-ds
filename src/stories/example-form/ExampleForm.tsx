import { Heading, Panel } from '@navikt/ds-react';
import React from 'react';
import { ISODateString } from '@navikt/ds-datepicker/lib/types';
import FormikDatepicker from '../../typed-formik-form/components/formik-datepicker/FormikDatepicker';
import { getTypedFormComponents } from '../../typed-formik-form/components/getTypedFormComponents';
import { ValidationError } from '../../typed-formik-form/validation/types';

enum Fields {
    checked = 'checked',
    date = 'date',
}

interface FieldValues {
    [Fields.checked]?: boolean;
    [Fields.date]?: ISODateString;
}

const FormComponents = getTypedFormComponents<Fields, FieldValues, ValidationError>();

const ExampleForm: React.FunctionComponent = () => {
    return (
        <Panel border={true}>
            <Heading size="large">Komponenter</Heading>
            <FormComponents.FormikWrapper
                initialValues={{}}
                onSubmit={(values) => console.log(values)}
                renderForm={() => {
                    return (
                        <>
                            <FormikDatepicker name={Fields.date} label="ABV" />
                        </>
                    );
                }}
            />
        </Panel>
    );
};

export default ExampleForm;
