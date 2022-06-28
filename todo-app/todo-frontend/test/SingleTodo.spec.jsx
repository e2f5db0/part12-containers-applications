import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SingleTodo from '../src/Todos/SingleTodo'

describe('<SingleTodo />', () => {
    it('should display text', () => {
        render(
            <SingleTodo />
        )
        expect(screen.getByText('Test your todos')).toBeVisible()
    })
})