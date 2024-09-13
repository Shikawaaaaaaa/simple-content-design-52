import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartnerRecruitment = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">FORM2000代理店パートナー募集中！</h1>
      <p className="text-xl mb-6">初期費用0円でスタート可能。</p>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>パートナーのメリット</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1.初期投資が不要</h3>
              <p>リスクを最小限に抑えた新規事業展開が可能です。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">2.シンプルな価格設定</h3>
              <p>既存の商材販売原価に上乗せする仕組み。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">3.既存商材との相乗効果</h3>
              <p>貴社商材と組み合わせることで独自の付加価値を生み出します。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">4.販売後のサポート</h3>
              <p>オペレーション部分は弊社側で代行いたします。</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600">※詳細は担当者までお問い合わせください。</p>
    </div>
  );
};

export default PartnerRecruitment;