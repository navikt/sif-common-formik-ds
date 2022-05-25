import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikTextField from '../../sif-common-formik-ds/components/formik-text-field/FormikTextField';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';

export default {
    title: 'Component/FormikTextField',
    component: FormikTextField,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikTextField>;

const Template: ComponentStory<typeof FormikTextField> = (args) => <FormikTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'FormikTextField',
    name: 'FormikTextField',
    description: 'Some description i appropriate',
};
Default.parameters = {
    formik: {
        initialValues: {
            FormikTextField: 'inital value',
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
