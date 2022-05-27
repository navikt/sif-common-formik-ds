import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-datepicker/lib/index.css';
import AppIntlProvider from '../storybook/stories/components/app-intl-provider/AppIntlProvider';
import ExampleForm from '../storybook/stories/forms/ExampleForm';

const App: React.FunctionComponent = () => {
    return (
        <AppIntlProvider locale="nb">
            <ExampleForm />
        </AppIntlProvider>
    );
};

export default App;
