import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText('Crafting Precision,')).toBeInTheDocument()
    expect(screen.getByText('Engineering Excellence')).toBeInTheDocument()
  })

  it('renders the service highlights', () => {
    render(<Hero />)
    expect(screen.getByText(/Advanced Mechanical Automation/)).toBeInTheDocument()
    expect(screen.getByText(/Precision Metal Fabrication/)).toBeInTheDocument()
    expect(screen.getByText(/Structural Engineering/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Get Quote Now')).toBeInTheDocument()
    expect(screen.getByText('View Portfolio')).toBeInTheDocument()
  })

  it('renders statistics', () => {
    render(<Hero />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
  })
})