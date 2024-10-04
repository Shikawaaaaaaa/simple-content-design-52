import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ListFilter, Rocket, Newspaper, Handshake } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600">Form2000</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Link to="/custom-list" className="w-full">
          <Button className="w-full h-20 md:h-24 text-lg md:text-xl flex flex-col items-center justify-center bg-green-500 hover:bg-green-600">
            <ListFilter className="mb-2" size={20} />
            <span>カスタムリスト</span>
          </Button>
        </Link>
        <Link to="/trial-plan" className="w-full">
          <Button className="w-full h-20 md:h-24 text-lg md:text-xl flex flex-col items-center justify-center bg-yellow-500 hover:bg-yellow-600">
            <Rocket className="mb-2" size={20} />
            <span>お試しプラン</span>
          </Button>
        </Link>
        <Link to="/media2000" className="w-full">
          <Button className="w-full h-20 md:h-24 text-lg md:text-xl flex flex-col items-center justify-center bg-purple-500 hover:bg-purple-600">
            <Newspaper className="mb-2" size={20} />
            <span>Media2000</span>
          </Button>
        </Link>
        <Link to="/partner-recruitment" className="w-full">
          <Button className="w-full h-20 md:h-24 text-lg md:text-xl flex flex-col items-center justify-center bg-red-500 hover:bg-red-600">
            <Handshake className="mb-2" size={20} />
            <span>パートナー募集</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;