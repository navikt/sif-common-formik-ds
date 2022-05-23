import { render, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import * as stories from '../../../stories/components/FormikCheckbox.stories';
import { StoryFormikWrapper } from '../../../stories/decorators/StoryFormikWrapper';

const { Default } = stories;

describe('<FormikCheckbox>', () => {
    const handleChange = jest.fn();

    const renderComponent = (content) => {
        return render(<StoryFormikWrapper parameters={{ includeButtons: true }}>{content}</StoryFormikWrapper>);
    };

    it('rendrer checkbox riktig', async () => {
        const screen = renderComponent(
            <Default name={'abc'} value="1">
                Checkbox label
            </Default>
        );
        const checkbox = screen.getByText('Checkbox label');
        expect(checkbox).toBeDefined();
    });

    it('kaller afterOnChange etter at bruker endrer state', async () => {
        const screen = renderComponent(
            <Default afterOnChange={handleChange} name={'abc'}>
                Checkbox label
            </Default>
        );
        const checkbox = screen.getByText('Checkbox label');
        userEvent.click(checkbox);
        await waitFor(() => expect(handleChange).toHaveBeenCalled());
    });

    it('kaller ikke afterOnChange dersom denne ikke er satt og bruker endrer state', async () => {
        const screen = renderComponent(<Default name={'abc'}>Checkbox label</Default>);
        const checkbox = screen.getByText('Checkbox label');
        userEvent.click(checkbox);
        await waitFor(() => expect(handleChange).not.toHaveBeenCalled());
    });
});
