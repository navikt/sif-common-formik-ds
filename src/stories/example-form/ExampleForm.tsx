import { Heading, Panel } from '@navikt/ds-react';
import React from 'react';
import '@navikt/ds-datepicker/lib/index.css';
import { ISODateString } from '@navikt/ds-datepicker/lib/types';
import FormBlock from '../../dev/components/form-block/FormBlock';
import { getTypedFormComponents } from '../../typed-formik-form/components/getTypedFormComponents';
import { YesOrNo } from '../../typed-formik-form/types';
import { ValidationError } from '../../typed-formik-form/validation/types';
import { mockAnimalOptions, MockAnimals } from '../mock-data';
import { getCheckedValidator } from '../../typed-formik-form/validation';

enum Fields {
    checked = 'checked',
    date = 'date',
    checkboxes = 'checkboxes',
    confirmation = 'confirmation',
    country = 'country',
    attachments = 'attachments',
    name = 'name',
    group = 'group',
    radio = 'radio',
    description = 'description',
    time = 'time',
    yesOrNo = 'yesOrNo',
    dateRange_from = 'dateRange_from',
    dateRange_to = 'dateRange_to',
}
interface FieldValues {
    [Fields.checked]?: boolean;
    [Fields.date]?: ISODateString;
    [Fields.checkboxes]?: string[];
    [Fields.confirmation]?: boolean;
    [Fields.country]?: string;
    [Fields.attachments]?: string[];
    [Fields.name]?: string;
    [Fields.group]?: string;
    [Fields.radio]?: MockAnimals;
    [Fields.description]?: string;
    [Fields.yesOrNo]?: YesOrNo;
    [Fields.dateRange_from]?: Date;
    [Fields.dateRange_to]?: Date;
}

const Form = getTypedFormComponents<Fields, FieldValues, ValidationError>();

const ExampleForm: React.FunctionComponent = () => {
    return (
        <Panel border={true} style={{ margin: '1rem' }}>
            <Heading size="medium">Example form</Heading>
            <Form.FormikWrapper
                initialValues={{}}
                onSubmit={(values) => console.log(values)}
                renderForm={({ values }) => {
                    return (
                        <Form.Form
                            includeButtons={true}
                            onValidSubmit={() => console.log('submit')}
                            onCancel={() => console.log('cancel')}>
                            <FormBlock>
                                <Form.DatePicker name={Fields.date} label="Choose a date" />
                            </FormBlock>
                            <FormBlock>
                                <Form.Checkbox
                                    name={Fields.checked}
                                    label={'Check this'}
                                    description={<>What</>}
                                    validate={getCheckedValidator()}
                                />
                            </FormBlock>
                            <FormBlock>
                                <Form.CheckboxGroup
                                    name={Fields.checkboxes}
                                    legend="Favourite animals"
                                    description="Choose any animal, just not the cat."
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
                                <Form.FileInput
                                    name={Fields.attachments}
                                    label="Choose picture"
                                    onFilesSelect={(evt) => console.log(evt)}
                                    accept={'.png'}
                                    description="Dette er en liten tekst som trengs her"
                                />
                            </FormBlock>
                            <FormBlock>
                                <Form.TextField
                                    name={Fields.name}
                                    label="What is the name of the beast?"
                                    description="Yes, I do refer to the cat ..."
                                    width="l"
                                />
                            </FormBlock>
                            <FormBlock>
                                <Form.YesOrNoQuestion
                                    name={Fields.yesOrNo}
                                    legend={'Do you want more questions?'}
                                    labels={{ no: 'No', yes: 'Yes' }}
                                />
                            </FormBlock>
                            {values.yesOrNo === YesOrNo.YES && (
                                <FormBlock margin="l">
                                    <Panel border={true}>
                                        <Form.InputGroup name={Fields.group} legend="ABC">
                                            Some content in this group
                                            <FormBlock>
                                                <Form.Textarea
                                                    name={Fields.description}
                                                    label="Please type some words"
                                                    maxLength={200}
                                                />
                                            </FormBlock>
                                            <FormBlock>
                                                <Form.RadioGroup
                                                    legend="Choose ONE animal"
                                                    name={Fields.radio}
                                                    radios={mockAnimalOptions}
                                                />
                                            </FormBlock>
                                            <FormBlock>
                                                <Form.TimeInput label="What's the time?" name={Fields.time} />
                                            </FormBlock>
                                        </Form.InputGroup>
                                    </Panel>
                                </FormBlock>
                            )}
                            <FormBlock>
                                <Form.Select label="Choose ONE animal" name={Fields.radio}>
                                    {mockAnimalOptions.map((a) => (
                                        <option key={a.value} value={a.value}>
                                            {a.label}
                                        </option>
                                    ))}
                                </Form.Select>
                            </FormBlock>
                            <FormBlock>
                                <Form.DateRangePicker
                                    legend="Choose some daterange"
                                    fromInputProps={{ label: 'From', name: Fields.dateRange_from }}
                                    toInputProps={{ label: 'To', name: Fields.dateRange_to }}
                                />
                            </FormBlock>
                            <FormBlock>
                                <Form.DateIntervalPicker
                                    legend="Choose a date interval"
                                    fromDatepickerProps={{ label: 'From', name: Fields.dateRange_from }}
                                    toDatepickerProps={{ label: 'To', name: Fields.dateRange_to }}
                                />
                            </FormBlock>
                            <FormBlock>
                                <Form.ConfirmationCheckbox name={Fields.confirmation} label="abc">
                                    Please confirm that you do not like cats
                                </Form.ConfirmationCheckbox>
                            </FormBlock>
                        </Form.Form>
                    );
                }}
            />
        </Panel>
    );
};

export default ExampleForm;
