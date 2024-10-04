import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Rocket, Newspaper, Users, Menu, X } from 'lucide-react';

const MobileLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { icon: Home, text: 'ホーム', to: '/' },
    { icon: FileText, text: 'カスタムリスト', to: '/custom-list' },
    { icon: Rocket, text: 'お試しプラン', to: '/trial-plan' },
    { icon: Newspaper, text: 'Media2000', to: '/media2000' },
    { icon: Users, text: 'パートナー募集', to: '/partner-recruitment' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">FORM2000</h1>
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      <nav className={`bg-white border-b border-gray-200 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="flex items-center p-4 hover:bg-gray-100" onClick={toggleMenu}>
                <item.icon size={20} className="mr-3" />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow p-4 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;