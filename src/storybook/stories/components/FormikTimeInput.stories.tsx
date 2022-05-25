import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikTimeInput from '../../../sif-common-formik-ds/components/formik-time-input/FormikTimeInput';
import { withFormikWrapper } from '../../decorators/StoryFormikWrapper';

export default {
    title: 'Component/FormikTimeInput',
    component: FormikTimeInput,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikTimeInput>;

const Template: ComponentStory<typeof FormikTimeInput> = (args) => <FormikTimeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'FormikTimeInput',
    name: 'FormikTimeInput',
    description: 'Some description i appropriate',
};
Default.parameters = {
    formik: {
        initialValues: {
            FormikTimeInput: { hours: '2', minutes: '10' },
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
    error: 'This is the error',
};

WithError.parameters = {
    ...Default.parameters,
};
