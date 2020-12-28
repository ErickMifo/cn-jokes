import React from 'react';

import { render, fireEvent } from '@testing-library/react'

import ChangeName from '../Joke/changeName';

describe('Test for changeName component', () => {
    it('Should change the name of the main character when form has been submitted',  () => {


        const { queryByTestId } = render (<ChangeName />)

        const firstInput = queryByTestId('input-firstName')

        fireEvent.change(
            firstInput, 
            { target: {value: 'Nome'}}
        )

        const secondInput = queryByTestId('input-lastName')

        fireEvent.change(
            secondInput,
            { target: {value: 'Sobrenome'}}
        )
 

        const btn = queryByTestId('btn')

        fireEvent.click(btn)

            expect(firstInput.value).toBe('Nome')
            expect(secondInput.value).toBe('Sobrenome')

    })
})
