import { Fieldset, Panel } from '@navikt/ds-react';
import React from 'react';
import { FormikModalFormAndList, TypedFormInputValidationProps } from '../../sif-common-formik-ds';
import { ModalFormAndListLabels } from '../../sif-common-formik-ds/components/formik-modal-form/types';

interface Props<FieldName> extends TypedFormInputValidationProps<FieldName, string> {
    name: FieldName;
    labels: ModalFormAndListLabels;
}

function ExampleListAndDialog<FieldName>({ name, labels, validate }: Props<FieldName>) {
    return (
        <FormikModalFormAndList<FieldName, any, string>
            name={name}
            dialogWidth="wide"
            labels={labels}
            validate={validate ? (value) => validate(value, name) : undefined}
            shouldCloseOnOverlayClick={false}
            maxItems={3}
            formRenderer={({ onSubmit, onCancel, item, allItems }) => <>This is the form</>}
            listRenderer={({ items, onEdit, onDelete }) => (
                <Fieldset legend={'Add some items'}>This is the list</Fieldset>
            )}
        />
    );
}

export default ExampleListAndDialog;
