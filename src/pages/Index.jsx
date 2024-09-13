import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Form2000</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        <Link to="/custom-list">
          <Button className="w-full h-24 text-xl">カスタムリスト抽出</Button>
        </Link>
        <Link to="/trial-plan">
          <Button className="w-full h-24 text-xl">お試しプラン</Button>
        </Link>
        <Link to="/media2000">
          <Button className="w-full h-24 text-xl">Media2000</Button>
        </Link>
        <Link to="/partner-recruitment">
          <Button className="w-full h-24 text-xl">代理店パートナー募集</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;