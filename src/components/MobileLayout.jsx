import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Rocket, Newspaper, Users } from 'lucide-react';

const MobileLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">FORM2000</h1>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">
        <ul className="flex justify-around">
          <li>
            <Link to="/" className="flex flex-col items-center p-2">
              <Home size={24} />
              <span className="text-xs mt-1">ホーム</span>
            </Link>
          </li>
          <li>
            <Link to="/custom-list" className="flex flex-col items-center p-2">
              <FileText size={24} />
              <span className="text-xs mt-1">カスタムリスト</span>
            </Link>
          </li>
          <li>
            <Link to="/trial-plan" className="flex flex-col items-center p-2">
              <Rocket size={24} />
              <span className="text-xs mt-1">お試しプラン</span>
            </Link>
          </li>
          <li>
            <Link to="/media2000" className="flex flex-col items-center p-2">
              <Newspaper size={24} />
              <span className="text-xs mt-1">Media2000</span>
            </Link>
          </li>
          <li>
            <Link to="/partner-recruitment" className="flex flex-col items-center p-2">
              <Users size={24} />
              <span className="text-xs mt-1">パートナー募集</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileLayout;