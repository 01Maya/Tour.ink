'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronRight, Globe, MapPin, Menu, Plane, Search, Users, X, Zap, Shield, Headphones, Award, Star, BookOpen, Sunrise, Utensils, Camera, Umbrella, Play, Facebook, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Component() {
const [isMenuOpen, setIsMenuOpen] = React.useState(false)
const [activeSection, setActiveSection] = React.useState('')

const destinations = [
{
  name: 'Ancient Rome',
  location: 'Rome, Italy',
  image: '/rome.jpeg',
  price: '$1,200',
  description: 'Experience the grandeur of the Colosseum and ancient Roman architecture.',
},
{
  name: 'Swiss Alps',
  location: 'Zermatt, Switzerland',
  image: '/swiss.jpeg',
  price: '$2,500',
  description: 'Ski and explore the majestic snowy Swiss Alps with stunning mountain views.',
},
{
  name: 'Tropical Paradise',
  location: 'Bora Bora',
  image: '/tropical.jpeg',
  price: '$3,500',
  description: 'Discover exclusive luxurious overwater villas in crystal clear turquoise waters.',
},
{
  name: 'Maldives Retreat',
  location: 'Maldives',
  image: '/maldives.jpeg',
  price: '$4,000',
  description: 'Experience ultimate luxury in secluded overwater villas with pristine beaches.',
},
]

const categories = [
{ name: 'Beach', icon: <Umbrella className="h-8 w-8 text-blue-500" /> },
{ name: 'Historical', icon: <Globe className="h-8 w-8 text-amber-500" /> },
{ name: 'Mountain', icon: <MapPin className="h-8 w-8 text-emerald-500" /> },
{ name: 'Cultural', icon: <Users className="h-8 w-8 text-purple-500" /> },
]

const whyChooseUs = [
{ title: 'Fast Booking', description: 'Quick and easy travel arrangements', icon: <Zap className="h-10 w-10 text-yellow-400" /> },
{ title: 'Safe & Secure', description: 'Your safety is our top priority', icon: <Shield className="h-10 w-10 text-green-400" /> },
{ title: '24/7 Support', description: 'Always here when you need us', icon: <Headphones className="h-10 w-10 text-blue-400" /> },
{ title: 'Best Deals', description: 'Unbeatable prices and offers', icon: <Award className="h-10 w-10 text-red-400" /> },
]

const testimonials = [
{ name: 'Sarah L.', comment: 'The Swiss Alps trip was beyond my expectations! Absolutely stunning.', rating: 5 },
{ name: 'John D.', comment: 'Our Maldives vacation was pure paradise. The overwater villa was incredible!', rating: 5 },
{ name: 'Emma W.', comment: 'Rome was magical. The historical tours were perfectly organized.', rating: 5 },
]

const travelTips = [
{ title: 'Pack Smart', content: 'Roll your clothes to save space and prevent wrinkles.', icon: <Sunrise className="h-12 w-12 text-orange-400" /> },
{ title: 'Learn Local Phrases', content: 'Knowing a few key phrases in the local language goes a long way.', icon: <BookOpen className="h-12 w-12 text-indigo-400" /> },
{ title: 'Stay Hydrated', content: 'Always carry a reusable water bottle, especially in hot climates.', icon: <Utensils className="h-12 w-12 text-teal-400" /> },
{ title: 'Capture Memories', content: 'Don\'t forget to bring a camera or ensure your phone has enough storage.', icon: <Camera className="h-12 w-12 text-pink-400" /> },
]

const scrollToSection = (sectionId: string) => {
const section = document.getElementById(sectionId)
if (section) {
  const header = document.querySelector('header')
  const headerHeight = header ? header.offsetHeight : 0
  const yOffset = -headerHeight - 20 // Additional 20px buffer
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  setActiveSection(sectionId)
  setIsMenuOpen(false) // Close mobile menu after clicking
}
}

React.useEffect(() => {
const handleScroll = () => {
  const scrollPosition = window.scrollY
  const headerHeight = document.querySelector('header')?.offsetHeight || 0
  const sections = ['hero', 'categories', 'destinations', 'why-choose-us', 'testimonials', 'travel-tips', 'newsletter', 'contact']

  const currentSection = sections.find(section => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= headerHeight + 50 && rect.bottom > headerHeight
    }
    return false
  })

  if (currentSection) {
    setActiveSection(currentSection)
  }
}

window.addEventListener('scroll', handleScroll)
handleScroll() // Call once to set initial active section
return () => window.removeEventListener('scroll', handleScroll)
}, [])


return (
<div className="flex min-h-screen flex-col bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 scroll-smooth scroll-padding-top">
<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/50">
  <div className="container mx-auto flex items-center h-16 justify-between">
    {/* Logo (always visible) */}
    <Link className="flex items-center gap-2 text-2xl font-bold flex-none" href="#">
      <Plane className="h-8 w-8 text-blue-500" />
      Tour.ink
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex gap-6 mx-auto flex-none">
      {['destinations', 'categories', 'why-choose-us', 'testimonials', 'travel-tips', 'newsletter'].map((item) => (
        <button
          key={item}
          className={`text-sm font-medium hover:text-primary transition-colors ${activeSection === item ? 'text-primary' : ''}`}
          onClick={() => scrollToSection(item)}
        >
          {item
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </button>
      ))}
    </nav>

    {/* Desktop CTA */}
    <div className="hidden md:flex flex-none">
      <Button size="sm" variant="default">
        Book Now
      </Button>
    </div>

    {/* Mobile Menu Trigger */}
    <div className="md:hidden ml-auto">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="flex flex-col gap-4">
            {['destinations', 'categories', 'why-choose-us', 'testimonials', 'travel-tips', 'newsletter'].map((item) => (
              <button
                key={item}
                className={`text-lg font-semibold hover:text-primary transition-colors text-left ${activeSection === item ? 'text-primary' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </button>
            ))}

            {/* Mobile CTA Button */}
            <Button size="sm" variant="default" className="mt-4 w-full">
              Book Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  <main className="flex-1">
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-start max-w-[650px] space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm md:text-base font-semibold italic uppercase tracking-widest bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent drop-shadow-sm heading"
            style={{ letterSpacing: '0.12em' }}
          >
            BEST DESTINATIONS AROUND THE WORLD
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Travel, <span className="relative inline-block">enjoy
              <span className="absolute bottom-2 left-0 w-full h-[0.2em] bg-orange-400 opacity-50"></span>
            </span>
            <br />
            and live a new
            <br />
            and full life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-[520px] md:text-lg"
          >
            Built wicked longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
            >
              Find out more
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full gap-2 border-red-200 hover:bg-red-50 text-gray-600"
            >
              <Play className="h-4 w-4 text-red-500 fill-current" />
              Play Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
    <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <div className="mb-2 p-3 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <section id="destinations" className="w-full py-12 md:py-24 lg:py-32 bg-white/50 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">Featured Destinations</h2>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
<Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-[400px] flex flex-col">
  {/* image wrapper overlaps card top with rounded corners */}
  <div className="-mt-6 -mx-4 rounded-t-xl overflow-hidden shadow-md">
    <div className="relative h-[280px] sm:h-[260px] md:h-[280px]">
      <Image
        alt={destination.name}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        width={800}
        height={520}
        src={destination.image}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-lg font-semibold text-white">{destination.name}</h3>
        <p className="text-sm text-white/90">{destination.location}</p>
      </div>
    </div>
  </div>

  <CardContent className="pt-4 px-4 pb-1.5 bg-white rounded-b-xl flex flex-col">
    <p className="text-sm text-gray-500 line-clamp-3 mb-1">{destination.description}</p>
    <div className="flex justify-between items-center mt-2">
      <p className="text-lg font-semibold text-gray-800">{destination.price}</p>
      <Button size="sm" variant="outline" className="font-medium">
        Book Now
      </Button>
    </div>
  </CardContent>
</Card>

            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button>
            View All Destinations
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
    <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">Why Choose Us</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                <CardContent className="p-6 flex-1 flex flex-col items-center text-center justify-between">
                  <div className="p-3 mb-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white/50 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">What Our Travelers Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section id="travel-tips" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">Travel Tips</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {travelTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                <CardContent className="p-6 flex-1 flex flex-col items-center text-center justify-between">
                  <div className="p-4 mb-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{tip.title}</h3>
                    <p className="text-sm text-gray-500">{tip.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 bg-white/50 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Subscribe to our newsletter for exclusive travel deals and inspiration.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer id="contact" className="border-t bg-white/50 backdrop-blur-md">
      <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Plane className="h-7 w-7 text-blue-500" />
          <span className="font-semibold">Tour.ink</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/Contatc">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
  <div className="container text-center py-2 text-xs text-gray-500">© {new Date().getFullYear()} Tour.ink. All rights reserved.</div>
  </footer>
</div>
)
}