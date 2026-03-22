

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold">SULOG</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Template. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="text-sm text-gray-400 hover:text-white">
              Terms of Use
            </a>
            <a className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
