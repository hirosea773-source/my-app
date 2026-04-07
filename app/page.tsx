export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8">
      {/* {/* 日本の個人事業主向けのランディングページにする
    信頼感・シンプル・モダン
    CTAは「無料相談はこちら」
    セクション構成：
    ・ヘッダー
    ・ヒーロー
    ・特徴
    ・CTA
    ・フッター */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">個人事業主のためのランディングページ</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ヒーローセクション</h2>
        <p className="text-lg mb-4">あなたのビジネスを次のレベルへ！信頼感とシンプルさを兼ね備えたランディングページで、無料相談をお申し込みください。</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">無料相談はこちら</button>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">特徴セクション</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>信頼感のあるデザイン</li>
          <li>シンプルで使いやすいインターフェース</li>
          <li>モダンなスタイルでビジネスを引き立てる</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CTAセクション</h2>
        <p className="text-lg mb-4">今すぐ無料相談をお申し込みください！あなたのビジネスの成功をサポートします。</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">無料相談はこちら</button>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; 2024 個人事業主のためのランディングページ. All rights reserved.
      </footer>   

      
    </main>
  );
}