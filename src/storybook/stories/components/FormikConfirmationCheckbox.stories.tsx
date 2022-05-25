import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikConfirmationCheckbox from '../../../sif-common-formik-ds/components/formik-confirmation-checkbox/FormikConfirmationCheckbox';
import { withFormikWrapper } from '../../decorators/StoryFormikWrapper';

export default {
    title: 'Component/FormikConfirmationCheckbox',
    component: FormikConfirmationCheckbox,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikConfirmationCheckbox>;

const Template: ComponentStory<typeof FormikConfirmationCheckbox> = (args) => <FormikConfirmationCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'FormikConfirmationCheckbox',
    name: 'formikConfirmationCheckbox',
    value: 'abc',
    children: 'This is the description',
};
Default.parameters = {
    formik: {
        initialValues: {
            formikConfirmationCheckbox: false,
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
