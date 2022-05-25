import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FormikDateRangePicker, {
    FormikDateRangePickerProps,
} from '../../../sif-common-formik-ds/components/formik-date-range-picker/FormikDateRangePicker';
import { withFormikWrapper } from '../../decorators/StoryFormikWrapper';
import { withIntl } from '../../decorators/withIntl';

export default {
    title: 'Component/FormikDateRangePicker',
    component: FormikDateRangePicker,
    decorators: [withIntl, withFormikWrapper],
} as ComponentMeta<typeof FormikDateRangePicker>;

const Template: ComponentStory<typeof FormikDateRangePicker> = (args) => <FormikDateRangePicker {...args} />;

export const Default = Template.bind({});

const defaultProps: FormikDateRangePickerProps<any, any> = {
    legend: 'Choose date',
    fromInputProps: {
        label: 'From',
        name: 'from',
    },
    toInputProps: {
        label: 'To',
        name: 'to',
    },
};

Default.args = {
    ...defaultProps,
};
Default.parameters = {
    ...defaultProps,
    formik: {
        initialValues: {
            from: '',
            to: '',
        },
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
};

Disabled.parameters = {
    ...Default.parameters,
};

export const WithError = Template.bind({});
WithError.args = {
    ...Default.args,
};

WithError.parameters = {
    ...Default.parameters,
};
