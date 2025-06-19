
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar'
import { describe, expect, it, vi } from 'vitest'

describe('SearchBar', () => {
  it('renders input and button', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(<SearchBar value="" onChange={handleChange} />)

    const input = screen.getByPlaceholderText('Search...')
    fireEvent.change(input, { target: { value: 'react' } })

    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onSearch when button clicked', () => {
    const handleSearch = vi.fn()
    render(<SearchBar onSearch={handleSearch} />)

    const button = screen.getByText('Search')
    fireEvent.click(button)

    expect(handleSearch).toHaveBeenCalled()
  })
})
