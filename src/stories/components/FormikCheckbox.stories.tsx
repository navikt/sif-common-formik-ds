import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikCheckbox from '../../typed-formik-form/components/formik-checkbox/FormikCheckbox';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';

export default {
    title: 'Form/FormikCheckbox',
    component: FormikCheckbox,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikCheckbox>;

const Template: ComponentStory<typeof FormikCheckbox> = (args) => <FormikCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'FormikCheckbox',
    name: 'formikCheckbox1',
    value: 'abc',
};
Default.parameters = {
    formik: {
        initialValues: {
            formikCheckbox1: true,
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

export const MedFeil = Template.bind({});
MedFeil.args = {
    ...Default.args,
    feil: 'Her er det noe feil gitt',
};

MedFeil.parameters = {
    ...Default.parameters,
};
