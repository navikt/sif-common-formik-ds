import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import withFormik from 'storybook-formik';
import FormikYesOrNoQuestion from '../../../sif-common-formik-ds/components/formik-yes-or-no-question/FormikYesOrNoQuestion';
import { YesOrNo } from '../../../sif-common-formik-ds/types';

export default {
    title: 'Component/FormikYesOrNoQuestion',
    component: FormikYesOrNoQuestion,
    decorators: [withFormik],
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
