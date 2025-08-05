import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>
})

describe('Header', () => {
  it('renders the company name', () => {
    render(<Header />)
    expect(screen.getByText('The Metal Art')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Header />)
    expect(screen.getByText('Gohana, Haryana')).toBeInTheDocument()
    expect(screen.getByText('9416943116 | 7206028377')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Header />)
    expect(screen.getByText('Get Quote')).toBeInTheDocument()
    expect(screen.getByText('Call Now')).toBeInTheDocument()
  })
})