import React from 'react';
import '@navikt/ds-css';
import ExampleForm from '../stories/example-form/ExampleForm';
import AppIntlProvider from './app-intl-provider/AppIntlProvider';
import '@navikt/ds-datepicker/lib/index.css';

const App: React.FunctionComponent = () => {
    return (
        <AppIntlProvider locale="nb">
            <ExampleForm />
        </AppIntlProvider>
    );
};

export default App;
