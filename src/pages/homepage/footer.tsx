import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <a href="/" className="inline-block group mb-4">
              <h2 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                Laniyan Abdul-Qawi
              </h2>
            </a>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. Helping developers build better products and companies build better developer communities.
            </p>
            <p className="text-gray-500 text-sm">
              Abuja, Nigeria
            </p>
          </div>

          {/* Connect - Centered Vertically */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-semibold text-lg mb-6">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/oladotunlaniyan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                  <span className="group-hover:underline underline-offset-4">GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/abdul-qawi-laniyan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                  <span className="group-hover:underline underline-offset-4">LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/devdotun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                  <span className="group-hover:underline underline-offset-4">Twitter</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@laniyanabdulqawi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                  aria-label="YouTube Channel"
                >
                  <Youtube size={18} />
                  <span className="group-hover:underline underline-offset-4">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} Laniyan Abdul-Qawi. All rights reserved.</p>
            <a 
              href="mailto:oladotunlaniyan@gmail.com" 
              className="hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;