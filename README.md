# Sazanami Inc. Corporate Site

Sazanami Inc.のコーポレートサイトです。Next.js (App Router) と Tailwind CSS を使用し、静的エクスポートが可能な構成になっています。

## 開発環境

```bash
npm install
npm run dev
```

ローカル開発時は [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド & 静的エクスポート

```bash
npm run build
npm run export
```

`out/` ディレクトリに静的ファイルが出力されます。

## コード整形・Lint

```bash
npm run format
npm run lint
```

`npm run format:write` で Prettier による自動整形を実行できます。

## ディレクトリ構成

- `src/app` – App Router を利用したページ定義
- `src/components` – サイト共通の UI コンポーネント
- `docs/` – プロジェクトに関する仕様や運用ガイド

## ライセンス

本リポジトリ内のコンテンツの著作権は Sazanami Inc. に帰属します。
