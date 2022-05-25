import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikCheckboxGroup, {
    FormikCheckboxGroupProps,
} from '../../sif-common-formik-ds/components/formik-checkbox-group/FormikCheckboxGroup';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';
import { mockAnimalOptions } from '../mock-data';

export default {
    title: 'Component/FormikCheckboxGroup',
    component: FormikCheckboxGroup,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikCheckboxGroup>;

const Template: ComponentStory<typeof FormikCheckboxGroup> = (args) => <FormikCheckboxGroup {...args} />;

export const Default = Template.bind({});
const defaultArgs: FormikCheckboxGroupProps<any, any> = {
    legend: 'Choose one or more animals',
    description: 'Choose any animal except the catty one',
    name: 'animals',
    checkboxes: mockAnimalOptions,
};

Default.args = {
    ...defaultArgs,
};
Default.parameters = {
    formik: {
        initialValues: {
            FormikCheckboxGroup: ['dog'],
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
