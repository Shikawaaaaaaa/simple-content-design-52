import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ListFilter, Rocket, Newspaper, Handshake } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600 text-center">Form2000</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
        <Link to="/custom-list" className="w-full">
          <Button className="w-full h-16 text-base flex flex-col items-center justify-center bg-green-500 hover:bg-green-600">
            <ListFilter className="mb-1" size={24} />
            <span>カスタムリスト</span>
          </Button>
        </Link>
        <Link to="/trial-plan" className="w-full">
          <Button className="w-full h-16 text-base flex flex-col items-center justify-center bg-yellow-500 hover:bg-yellow-600">
            <Rocket className="mb-1" size={24} />
            <span>お試しプラン</span>
          </Button>
        </Link>
        <Link to="/media2000" className="w-full">
          <Button className="w-full h-16 text-base flex flex-col items-center justify-center bg-purple-500 hover:bg-purple-600">
            <Newspaper className="mb-1" size={24} />
            <span>Media2000</span>
          </Button>
        </Link>
        <Link to="/partner-recruitment" className="w-full">
          <Button className="w-full h-16 text-base flex flex-col items-center justify-center bg-red-500 hover:bg-red-600">
            <Handshake className="mb-1" size={24} />
            <span>パートナー募集</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;