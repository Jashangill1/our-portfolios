import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full py-4 bg-white shadow-md top-0 fixed">
      <nav className="flex justify-center gap-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <Link href="/about" className="text-blue-500 hover:text-blue-700">
          About
        </Link>
        <Link href="/projects" className="text-blue-500 hover:text-blue-700">
          Projects
        </Link>
        <Link href="/contact" className="text-blue-500 hover:text-blue-700">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
