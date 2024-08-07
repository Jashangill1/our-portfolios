const Footer = () => {
  return (
    <footer className="w-full py-4 static bg-white bottom-0">
      <div className="flex justify-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
