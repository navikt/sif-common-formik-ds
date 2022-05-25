import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-datepicker/lib/index.css';
import AppIntlProvider from '../storybook/stories/components/app-intl-provider/AppIntlProvider';

const App: React.FunctionComponent = () => {
    return <AppIntlProvider locale="nb">Start storybook</AppIntlProvider>;
};

export default App;
