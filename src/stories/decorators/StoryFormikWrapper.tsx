import { Panel } from '@navikt/ds-react';
import React from 'react';
import TypedFormikForm from '../../typed-formik-form/components/typed-formik-form/TypedFormikForm';
import TypedFormikWrapper from '../../typed-formik-form/components/typed-formik-wrapper/TypedFormikWrapper';
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

    return (
        <TypedFormikWrapper
            initialValues={formik?.initialValues || {}}
            onSubmit={(values) => {
                console.log('StoryFormikProvider', values);
            }}
            renderForm={() => (
                <TypedFormikForm includeButtons={includeButtons}>
                    <Panel style={{ maxWidth: maxWidth }} border={true}>
                        {children}
                    </Panel>
                </TypedFormikForm>
            )}
        />
    );
};
