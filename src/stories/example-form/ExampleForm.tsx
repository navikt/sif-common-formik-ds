import { Heading, Panel } from '@navikt/ds-react';
import React from 'react';
import '@navikt/ds-datepicker/lib/index.css';
import { ISODateString } from '@navikt/ds-datepicker/lib/types';
import FormBlock from '../../dev/components/form-block/FormBlock';
import { getTypedFormComponents } from '../../typed-formik-form/components/getTypedFormComponents';
import { ValidationError } from '../../typed-formik-form/validation/types';
import { MockAnimals } from '../mock-data';

enum Fields {
    checked = 'checked',
    date = 'date',
    checkboxes = 'checkboxes',
    confirmation = 'confirmation',
    country = 'country',
}
interface FieldValues {
    [Fields.checked]?: boolean;
    [Fields.date]?: ISODateString;
    [Fields.checkboxes]?: string[];
    [Fields.confirmation]?: boolean;
    [Fields.country]?: string;
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
                            <FormBlock>
                                <Form.CheckboxGroup
                                    name={Fields.checkboxes}
                                    legend="Favourite animals"
                                    description="Choose any animal, just not the cat."
                                    error={<>This is some error message</>}
                                    checkboxes={[
                                        { label: 'Dog', value: MockAnimals.dog },
                                        { label: 'Cat', value: MockAnimals.cat, disabled: true },
                                        { label: 'Fish', value: MockAnimals.fish },
                                    ]}
                                />
                            </FormBlock>
                            <FormBlock>
                                <Form.CountrySelect name={Fields.country} label="Which country is the best for cats?" />
                            </FormBlock>
                            <FormBlock>
                                <Form.ConfirmationCheckbox name={Fields.confirmation} label="abc">
                                    Please confirm that you do not like cats
                                </Form.ConfirmationCheckbox>
                            </FormBlock>
                        </>
                    );
                }}
            />
        </Panel>
    );
};

export default ExampleForm;
