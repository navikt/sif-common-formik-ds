import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikInputGroup from '../../sif-common-formik-ds/components/formik-input-group/FormikInputGroup';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';

export default {
    title: 'Component/FormikInputGroup',
    component: FormikInputGroup,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikInputGroup>;

const Template: ComponentStory<typeof FormikInputGroup> = (args) => <FormikInputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    legend: 'FormikInputGroup',
    name: 'FormikInputGroup',
    description: 'Some description i appropriate',
};
Default.parameters = {
    formik: {},
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
