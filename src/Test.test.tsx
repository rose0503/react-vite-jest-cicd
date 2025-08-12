import { render, screen } from '@testing-library/react'
import Test from './Test'

describe('Test', () => {
    it('renders the component', () => {
        render(<Test />)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
})