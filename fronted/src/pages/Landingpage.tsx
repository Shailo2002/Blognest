import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      title: "Beautiful Templates",
      description:
        "Choose from our collection of professionally designed templates.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      title: "Powerful Editor",
      description: "Write and format your content with our intuitive editor.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6",
    },
    {
      title: "SEO Optimized",
      description: "Get found online with built-in SEO tools and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-white">BlogNest</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-gray-200">
                Products
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Templates
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Resources
              </a>
              <button
                onClick={() => {
                  navigate("/signin");
                }}
                className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-gray-200"
              >
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black p-4">
            <a href="#" className="block text-white py-2">
              Products
            </a>
            <a href="#" className="block text-white py-2">
              Templates
            </a>
            <a href="#" className="block text-white py-2">
              Resources
            </a>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="w-full mt-4 bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-100"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative flex items-center min-h-screen px-8 text-white">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Blogging simplified, creativity amplified.
            </h1>
            <p className="text-xl mb-8">
              Begin blogging for free—zero commitments!
            </p>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="bg-white text-black px-6 py-3 text-lg font-medium rounded-3xl hover:bg-gray-200"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              All the tools and features you need to create and grow your blog
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">BlogNest</h2>
              <p className="text-gray-400">Create your perfect blog today.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 BlogNest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
