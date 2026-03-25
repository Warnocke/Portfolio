// Contact me section
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="text-black-600" size={20} />
                <span>evan.warnock@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="text-black-600" size={20} />
                <span>Jacksonville, FL</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-4" action="https://formspree.io/f/xbdprkvw" method="POST">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}