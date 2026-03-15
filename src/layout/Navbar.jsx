import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
]

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    SI<span className="text-primary">.</span>
                </a>
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map(link => (
                            <a
                                href={link.href}
                                key={link.href}
                                className="px-4 py-2 text-sm text-gray-500 hover:text-foreground rounded-full hover:bg-surface"
                            >{link.label}</a>
                        ))}
                    </div>
                </div>

                <div className='hidden md:block'>
                    <Button size='sm'>Contact Me</Button>
                </div>

                {/* Mobile Menue button */}
                <button className='md:hidden p-2 text-foreground cursor-pointer'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}        {/* They are built in Components from React Lucide */}
                </button>
            </nav>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden glass-strong animate-fade-in'>
                    <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                        {navLinks.map(link => (
                            <a
                                href={link.href}
                                key={link.href}
                                className="text-lg text-gray-500 hover:text-foreground py-2"
                            >{link.label}</a>
                        ))}
                        <Button >Contact Me</Button>
                    </div>
                </div>
            )}
        </header>
    )

}