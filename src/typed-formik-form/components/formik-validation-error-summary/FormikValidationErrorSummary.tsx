import React from 'react';
import { useFormikContext } from 'formik';
import { getAllFieldsWithErrors, getErrorForField } from '../../utils/typedFormErrorUtils';
import ValidationSummary, { ValidationSummaryError } from '../helpers/ValidationSummary';
import { TypedFormikFormContext } from '../typed-formik-form/TypedFormikForm';

function FormikValidationErrorSummary() {
    const context = React.useContext(TypedFormikFormContext);
    const formik = useFormikContext();
    if (formik && context && context.showErrors) {
        const fieldsWithErrors =
            !formik.isValid && getAllFieldsWithErrors(formik.errors, context.isHandledErrorTypeChecker);
        const errors: ValidationSummaryError[] | undefined = fieldsWithErrors
            ? fieldsWithErrors.map((fieldName) => {
                  const fieldError = getErrorForField(fieldName, formik.errors);
                  const error: ValidationSummaryError = {
                      errorMessage: context.fieldErrorHandler
                          ? context.fieldErrorHandler(fieldError, fieldName)
                          : fieldError,
                      fieldName,
                  };
                  return error;
              })
            : undefined;

        if (errors) {
            return <ValidationSummary errors={errors} />;
        }
    }

    return null;
}

export default FormikValidationErrorSummary;
