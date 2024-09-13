import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ListFilter, Rocket, Newspaper, Handshake } from 'lucide-react';
import { initBackgroundAnimation } from '../utils/backgroundAnimation';

const Index = () => {
  useEffect(() => {
    initBackgroundAnimation();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Form2000</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        <Link to="/custom-list">
          <Button className="w-full h-24 text-xl flex flex-col items-center justify-center bg-green-500 hover:bg-green-600">
            <ListFilter className="mb-2" size={24} />
            <span>カスタムリスト</span>
          </Button>
        </Link>
        <Link to="/trial-plan">
          <Button className="w-full h-24 text-xl flex flex-col items-center justify-center bg-yellow-500 hover:bg-yellow-600">
            <Rocket className="mb-2" size={24} />
            <span>お試しプラン</span>
          </Button>
        </Link>
        <Link to="/media2000">
          <Button className="w-full h-24 text-xl flex flex-col items-center justify-center bg-purple-500 hover:bg-purple-600">
            <Newspaper className="mb-2" size={24} />
            <span>Media2000</span>
          </Button>
        </Link>
        <Link to="/partner-recruitment">
          <Button className="w-full h-24 text-xl flex flex-col items-center justify-center bg-red-500 hover:bg-red-600">
            <Handshake className="mb-2" size={24} />
            <span>パートナー募集</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;