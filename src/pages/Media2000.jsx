import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Media2000 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Media2000</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>全国のWEBメディアに一斉配信</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">全国1400以上のWebメディアへ同時アプローチを実行。低コストで効率的なPR活動を実現します。</p>
          <h2 className="text-xl font-semibold mb-2">概要</h2>
          <p>FORM2000の機能を活用し、弊社の保有する全国1400以上のWebメディアへの同時アプローチを実現します。業界やテーマ別のメディアセグメント化機能により、ターゲットを絞ったPR戦略の実行が可能です。</p>
          <p>開封率、クリック率、掲載率などの詳細なKPIレポートを提供することで、定量的な評価を可能にせず、戦略の継続的な改善を支援します。</p>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600">※FORM2000のオプションサービスとしてご利用いただけます。詳細は担当者までお問い合わせください。</p>
    </div>
  );
};

export default Media2000;