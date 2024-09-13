import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrialPlan = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">お試しプラン</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>初回のみ 1000件 ¥45,000-(税抜き)で配信</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">お試しプランでできること</h2>
          <ul className="list-disc list-inside mb-4">
            <li>ターゲット企業1000社のリストアップ</li>
            <li>効果的な文言作成サポート</li>
            <li>投げ込み実行</li>
            <li>詳細な結果レポート共有</li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">こんな方にオススメ</h2>
          <ul className="list-disc list-inside">
            <li>「大量の企業に一気にアプローチしたいけど、方法がわからない…」</li>
            <li>「営業の効率を上げたいけど、高額なツールは導入しづらい…」</li>
            <li>「新規顧客開拓の新しい方法を探している」</li>
          </ul>
        </CardContent>
      </Card>
      <p className="text-center text-lg font-semibold">通常料金の半額以下でFORM2000の全機能をお試しいただけます。</p>
    </div>
  );
};

export default TrialPlan;