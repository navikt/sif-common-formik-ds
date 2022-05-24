import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikYesOrNoQuestion from '../../typed-formik-form/components/formik-yes-or-no-question/FormikYesOrNoQuestion';
import { YesOrNo } from '../../typed-formik-form/types';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';

export default {
    title: 'Component/FormikYesOrNoQuestion',
    component: FormikYesOrNoQuestion,
    decorators: [withFormikWrapper],
} as ComponentMeta<typeof FormikYesOrNoQuestion>;

const Template: ComponentStory<typeof FormikYesOrNoQuestion> = (args) => <FormikYesOrNoQuestion {...args} />;

export const Default = Template.bind({});
Default.args = {
    legend: 'Answer yes or no',
    name: 'yesOrNoQuestion',
};
Default.parameters = {
    formik: {
        initialValues: {
            yesOrNoQuestion: YesOrNo.YES,
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
