import { Heading, Panel } from '@navikt/ds-react';
import React from 'react';
import { ISODateString } from '@navikt/ds-datepicker/lib/types';
import FormBlock from '../../dev/components/form-block/FormBlock';
import { getTypedFormComponents } from '../../typed-formik-form/components/getTypedFormComponents';
import { ValidationError } from '../../typed-formik-form/validation/types';
import '@navikt/ds-datepicker/lib/index.css';

enum Fields {
    checked = 'checked',
    date = 'date',
}

interface FieldValues {
    [Fields.checked]?: boolean;
    [Fields.date]?: ISODateString;
}

const Form = getTypedFormComponents<Fields, FieldValues, ValidationError>();

const ExampleForm: React.FunctionComponent = () => {
    return (
        <Panel border={true}>
            <Heading size="medium">Example form</Heading>
            <Form.FormikWrapper
                initialValues={{}}
                onSubmit={(values) => console.log(values)}
                renderForm={() => {
                    return (
                        <>
                            <FormBlock>
                                <Form.DatePicker name={Fields.date} label="Choose a date" />
                            </FormBlock>
                            <FormBlock>
                                <Form.Checkbox name={Fields.checked} label={'Check this'} description={<>What</>} />
                            </FormBlock>
                        </>
                    );
                }}
            />
        </Panel>
    );
};

export default ExampleForm;
