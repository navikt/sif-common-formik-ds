import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikDatepicker, {
    FormikDatepickerProps,
} from '../../typed-formik-form/components/formik-datepicker/FormikDatepicker';
import { withFormikWrapper } from '../decorators/StoryFormikWrapper';
import { withIntl } from '../decorators/withIntl';

export default {
    title: 'Form/FormikDatepicker',
    component: FormikDatepicker,
    decorators: [withIntl, withFormikWrapper],
} as ComponentMeta<typeof FormikDatepicker>;

const Template: ComponentStory<typeof FormikDatepicker> = (args) => <FormikDatepicker {...args} />;

export const Default = Template.bind({});
const defaultProps: FormikDatepickerProps<any, any> = {
    id: 'datepicker',
    name: 'date',
    label: 'ABc',
    description: 'Some description',
};
Default.args = {
    ...defaultProps,
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
