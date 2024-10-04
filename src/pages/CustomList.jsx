import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600">カスタムリスト抽出</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">幅広いリスト抽出に対応</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base">プレスリリース以外にも、ご要望に応じたオーダーメイドのリストを抽出いたします。まずはご相談ください。</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: "👥", title: "業界イベントに出展した企業リスト" },
          { icon: "💰", title: "資金調達に成功した企業リスト" },
          { icon: "🔍", title: "直近で求人募集を始めた企業リスト" },
          { icon: "🌍", title: "SDGs関連の取り組みを行っている企業リスト" },
          { icon: "🤝", title: "特定の業界団体に参加している企業リスト" }
        ].map((item, index) => (
          <Card key={index} className="p-4">
            <CardTitle className="flex items-center text-base sm:text-lg">
              <span className="text-xl sm:text-2xl mr-2">{item.icon}</span>
              {item.title}
            </CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomList;