import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikCountrySelect from '../../../sif-common-formik-ds/components/formik-country-select/FormikCountrySelect';
import { withFormikWrapper } from '../../decorators/StoryFormikWrapper';
// import { withFormik } from 'storybook-formik';

export default {
    title: 'Component/FormikCountrySelect',
    component: FormikCountrySelect,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikCountrySelect>;

const Template: ComponentStory<typeof FormikCountrySelect> = (args) => <FormikCountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'FormikCountrySelect',
    name: 'country',
    value: 'abc',
};
Default.parameters = {
    formik: {
        initialValues: {
            country: 'FLK',
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
    error: 'This',
};

WithError.parameters = {
    ...Default.parameters,
};
