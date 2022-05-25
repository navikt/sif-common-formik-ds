import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikRadioGroup, {
    FormikRadioGroupProps,
} from '../../../sif-common-formik-ds/components/formik-radio-group/FormikRadioGroup';
import { withFormikWrapper } from '../../decorators/StoryFormikWrapper';
import { mockAnimalOptions } from '../../mock-data';

export default {
    title: 'Component/FormikRadioGroup',
    component: FormikRadioGroup,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikRadioGroup>;

const Template: ComponentStory<typeof FormikRadioGroup> = (args) => <FormikRadioGroup {...args} />;

export const Default = Template.bind({});
const defaultArgs: FormikRadioGroupProps<any, any> = {
    legend: 'Choose one or more animals',
    description: 'Choose any animal except the catty one',
    name: 'animals',
    radios: mockAnimalOptions,
};

Default.args = {
    ...defaultArgs,
};
Default.parameters = {
    formik: {
        initialValues: {
            FormikRadioGroup: ['dog'],
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
