import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sazanami-Analytics｜サービス概要",
  description:
    "高校生の活動ログを証拠に変えるSazanami-Analyticsの仕組みと成果物について紹介します。",
};

const pipeline = [
  {
    step: "01",
    title: "データ収集",
    description:
      "Slack、GitHub、学習記録、コンテスト実績などのデジタル足跡を安全に収集。本人同意と学校管理者の承認に基づき、必要なデータのみを取り込みます。",
  },
  {
    step: "02",
    title: "特徴抽出",
    description:
      "OpenTelemetry互換のトレース設計により、活動ログを構造化データへ変換。重要イベントや成果指標をメタデータとして整理します。",
  },
  {
    step: "03",
    title: "時系列整形",
    description:
      "努力の連続性が分かる時系列ストーリーへ再構成。プロジェクトやコンテスト単位での振り返りも可能です。",
  },
  {
    step: "04",
    title: "根拠リンク化",
    description:
      "提出書類で求められる裏付けを、活動ログの原典リンクとして添付。信頼性と再現性を担保します。",
  },
  {
    step: "05",
    title: "提出様式変換",
    description:
      "大学推薦、企業面談、コンテスト応募など、提出先のフォーマットに合わせて自動整形。オンラインURLとPDF形式を即時出力します。",
  },
];

const outputs = [
  {
    title: "成長ストーリーダッシュボード",
    content:
      "日付・活動内容・成果指標が一目で分かる。教員・保護者との面談や振り返りに活用できます。",
  },
  {
    title: "提出用ポートフォリオPDF",
    content:
      "志望理由書や推薦文ドラフトを添えたPDF。AI利用を明示し、手動編集用のWord形式も併せて提供。",
  },
  {
    title: "API / Webhook 連携",
    content:
      "学校情報システムやスポンサー企業のダッシュボードと連携可能なAPIを提供。学生情報の二次利用は同意管理の下で実施。",
  },
];

export default function ServicesPage() {
  return (
    <div className="section-container">
      <div className="space-y-6">
        <p className="badge">サービス概要</p>
        <h1 className="text-4xl font-semibold text-white">
          活動証拠を生み出す5段階のプロセス
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300">
          活動証跡が分散し埋もれてしまう課題を解決するために、Sazanami-Analyticsはデータの収集から提出フォーマットへの変換までを自動化。高校生の努力をそのまま証拠へ転換します。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {pipeline.map((item) => (
          <div key={item.step} className="card">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              {item.step}
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="card bg-primary/10">
        <h2 className="text-3xl font-semibold text-white">成果物のイメージ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {outputs.map((output) => (
            <div
              key={output.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-left"
            >
              <h3 className="text-lg font-semibold text-white">
                {output.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{output.content}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400">
          ※
          表示されるデータはすべてダミー情報です。個人を特定できる素材は利用しません。
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-lg">
        <h2 className="text-2xl font-semibold text-white">導入・運用支援</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li>
            ・導入前の教育現場向けワークショップ、プライバシー説明会を実施
          </li>
          <li>・PoCフェーズでは月次レポートを発行し、ログの活用方法を伴走</li>
          <li>
            ・OpenTelemetryベースの観測データを提供し、学校内DXの基盤づくりを支援
          </li>
        </ul>
        <div className="mt-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center">
          <Link
            href="/contact?type=demo"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/40"
          >
            デモを依頼する
          </Link>
          <Link
            href="/policies"
            className="text-slate-300 underline-offset-4 hover:underline"
          >
            セキュリティとポリシーを確認する
          </Link>
        </div>
      </div>
    </div>
  );
}
