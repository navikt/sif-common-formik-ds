import { render } from '@testing-library/react';
import React from 'react';
import { StoryFormikWrapper } from '../../../storybook/decorators/StoryFormikWrapper';
import { mockAnimalOptions } from '../../../storybook/mock-data';
import * as stories from '../../../storybook/stories/components/FormikCheckboxGroup.stories';

const { Default } = stories;

describe('<FormikCheckbox>', () => {
    const renderComponent = (content) => {
        return render(<StoryFormikWrapper parameters={{ includeButtons: true }}>{content}</StoryFormikWrapper>);
    };

    const label = 'Checkbox label';

    it('rendrer gruppe riktig', async () => {
        const screen = renderComponent(<Default name={'animals'} legend={label} checkboxes={mockAnimalOptions} />);
        const checkbox = screen.getByText(label);
        expect(checkbox).toBeDefined();
    });
});
