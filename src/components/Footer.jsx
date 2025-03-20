const Footer = () => {
  return (
    <footer className="bg-dark-100 shadow-inner py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-textSecondary">
          Built with React & Tailwind CSS by Dilshan Manohara
        </p>
        <p className="text-textSecondary text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer 