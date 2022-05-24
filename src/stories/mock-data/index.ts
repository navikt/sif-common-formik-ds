import { CheckboxProps } from '@navikt/ds-react';

export enum MockAnimals {
    dog = 'dog',
    cat = 'cat',
    fish = 'fish',
}

type MockOption = Pick<CheckboxProps, 'value' | 'description' | 'error'> & {
    label: string;
};

export const mockAnimalOptions: MockOption[] = [
    {
        label: 'Dog',
        value: MockAnimals.dog,
        description: 'Maybe the best option',
    },
    {
        label: 'Cat',
        value: MockAnimals.cat,
    },
    {
        label: 'Fish',
        value: MockAnimals.fish,
    },
];
