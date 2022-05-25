import { ErrorSummary } from '@navikt/ds-react';
import React, { useEffect, useRef } from 'react';
import ValidationErrorLink from './ValidationErrorLink';

interface Props {
    title?: string;
    errors: ValidationSummaryError[];
    focusOnMount?: boolean;
}

export interface ValidationSummaryError {
    errorMessage: string;
    fieldName: string;
}

const ValidationSummary: React.FunctionComponent<Props> = ({ title, errors }) => {
    const summaryEl = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { current } = summaryEl;
        if (current !== null) {
            current.focus();
        }
    }, []);
    return (
        <ErrorSummary ref={summaryEl} title={title || 'Feil i skjema'}>
            {errors.map((error, idx) => (
                <ValidationErrorLink
                    key={`validation_error_key_${idx}`}
                    className={'lenke'}
                    onClick={() => {
                        const elementById = document.getElementById(error.fieldName);
                        const elementByName = document.getElementsByName(error.fieldName)[0];
                        if (elementById) {
                            elementById.focus();
                        } else if (elementByName) {
                            elementByName.focus();
                        }
                    }}>
                    {error.errorMessage}
                </ValidationErrorLink>
            ))}
        </ErrorSummary>
    );
};
export default ValidationSummary;
