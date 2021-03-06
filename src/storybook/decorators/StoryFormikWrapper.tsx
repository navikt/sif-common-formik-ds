import { Panel } from '@navikt/ds-react';
import React from 'react';
import TypedFormikForm from '../../sif-common-formik-ds/components/typed-formik-form/TypedFormikForm';
import TypedFormikWrapper from '../../sif-common-formik-ds/components/typed-formik-wrapper/TypedFormikWrapper';
interface Props {
    parameters?: {
        formik?: any;
        includeButtons?: boolean;
        maxWidth?: string;
    };
}

export const withFormikWrapper = (Story, args) => (
    <StoryFormikWrapper {...args}>
        <Story />
    </StoryFormikWrapper>
);

export const StoryFormikWrapper: React.FunctionComponent<Props> = (props) => {
    const { children, parameters } = props;
    const { formik, maxWidth = '800px', includeButtons = true } = parameters || {};
    const initialValues = formik?.initialValues || {};

    return (
        <TypedFormikWrapper
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log('StoryFormikProvider', values);
            }}
            renderForm={() => {
                return (
                    <TypedFormikForm includeButtons={includeButtons}>
                        <Panel style={{ maxWidth: maxWidth }} border={true}>
                            {children}
                        </Panel>
                    </TypedFormikForm>
                );
            }}
        />
    );
};
