import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full py-4 bg-white shadow-md top-0 fixed">
      <nav className="flex justify-center gap-4">
        <Link href="/" className="text-green-500 hover:text-green-700">
          Home
        </Link>
        <Link href="/about" className="text-green-500 hover:text-green-700">
          About
        </Link>
        <Link href="/projects" className="text-green-500 hover:text-green-700">
          Projects
        </Link>
        <Link href="/contact" className="text-green-500 hover:text-green-700">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
