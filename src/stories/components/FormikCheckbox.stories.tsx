import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikCheckbox from '../../sif-common-formik-ds/components/formik-checkbox/FormikCheckbox';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';

export default {
    title: 'Component/FormikCheckbox',
    component: FormikCheckbox,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikCheckbox>;

const Template: ComponentStory<typeof FormikCheckbox> = (args) => <FormikCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'FormikCheckbox',
    name: 'formikCheckbox',
    value: 'abc',
};
Default.parameters = {
    formik: {
        initialValues: {
            formikCheckbox: true,
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
