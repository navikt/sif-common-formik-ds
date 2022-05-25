import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikCheckboxGroup from '../../../sif-common-formik-ds/components/formik-checkbox-group/FormikCheckboxGroup';
import { withFormikWrapper } from '../../decorators/StoryFormikWrapper';
import { mockAnimalOptions, MockAnimals } from '../../mock-data';

export default {
    title: 'Component/FormikCheckboxGroup',
    component: FormikCheckboxGroup,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikCheckboxGroup>;

const Template: ComponentStory<typeof FormikCheckboxGroup> = (args) => <FormikCheckboxGroup {...args} />;

const fieldName = 'animals';

export const Default = Template.bind({});

Default.args = {
    legend: 'Choose one or more animals',
    description: 'Choose any animal except the catty one',
    name: fieldName,
    checkboxes: mockAnimalOptions,
};
Default.parameters = {
    formik: {
        initialValues: {
            [fieldName]: [],
        },
    },
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
    legend: 'Choose one or more animals',
    description: 'The correct choice is set',
    name: fieldName,
    checkboxes: mockAnimalOptions,
};
WithInitialValues.parameters = {
    formik: {
        initialValues: {
            [fieldName]: [MockAnimals.dog],
        },
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

Disabled.parameters = {
    ...Default.parameters,
};

export const WithError = Template.bind({});
WithError.args = {
    ...Default.args,
    error: 'There is something wrong here',
};

WithError.parameters = {
    ...Default.parameters,
};
