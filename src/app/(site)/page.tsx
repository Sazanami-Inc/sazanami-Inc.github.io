import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const differentiators = [
  {
    title: "提出物ではなく証拠をつくる",
    description:
      "SlackやGitHubなどの活動ログを自動収集し、根拠リンク付きのタイムラインとして可視化。高校生の努力を確かな証拠へ。",
    icon: SparklesIcon,
  },
  {
    title: "AIが自動で整形・要約",
    description:
      "OpenTelemetry設計思想に基づいた構造化データから、提出様式に応じたサマリーと推薦文ドラフトを生成します。",
    icon: ChartBarIcon,
  },
  {
    title: "教育現場対応の安全設計",
    description:
      "権限制御、暗号化、監査ログ、削除権限を標準搭載。プライバシー保護と透明性を両立させた運用が可能です。",
    icon: ShieldCheckIcon,
  },
];

const personas = [
  {
    title: "高校生",
    focus: "努力の可視化と提出物への転用",
    value:
      "日々の学習・挑戦ログをAIが整理し、自分の成長を自信を持って伝えられるポートフォリオへ。",
  },
  {
    title: "保護者",
    focus: "安心できる成果の把握",
    value:
      "安全に管理されたデータで、子どもの取り組みと成果を追跡。推薦入試や留学準備のサポートに。",
  },
  {
    title: "教員・学校",
    focus: "評価業務の効率化と透明化",
    value:
      "活動記録の一元管理と提出書式の自動変換で、推薦文作成や活動評価の再現性を高めます。",
  },
  {
    title: "企業・スポンサー",
    focus: "信頼できる成長証跡の共有",
    value:
      "若者支援・採用・社会貢献の文脈で、確かな行動データに基づく伴走・協働が可能になります。",
  },
];

const ctaButtons = [
  {
    label: "学校向け導入相談",
    href: "/contact?type=school",
  },
  {
    label: "個人利用を申し込む",
    href: "/contact?type=individual",
  },
  {
    label: "スポンサー連携を相談",
    href: "/contact?type=sponsor",
  },
];

export default function HomePage() {
  return (
    <div className="gradient-bg">
      <section className="section-container pt-24 text-center sm:pt-32">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-light">
            Sazanami-Analytics
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            高校生の努力を証拠に変えるAIポートフォリオエンジン
          </h1>
          <p className="text-lg leading-relaxed text-slate-300">
            活動ログの分散と提出書類の形式主義から解放し、挑戦のストーリーをデータで証明する。教育の現場に信頼と透明性をもたらします。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40"
            >
              プロダクトを見る
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-200"
            >
              導入のご相談はこちら
            </Link>
          </div>
          <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-slate-900/30 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-300">
                導入実績（パイロット）
              </p>
              <p className="mt-1 text-2xl font-bold text-white">9 校</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300">
                生成されたポートフォリオ
              </p>
              <p className="mt-1 text-2xl font-bold text-white">1,200 件</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300">
                教育現場での安全評価
              </p>
              <p className="mt-1 text-2xl font-bold text-white">
                プライバシー影響評価完了
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="text-3xl font-semibold text-white">選ばれる理由</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="card">
              <item.icon className="h-10 w-10 text-primary-light" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="text-3xl font-semibold text-white">利用シーンと価値</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {personas.map((persona) => (
            <div key={persona.title} className="card">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
                {persona.title}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {persona.focus}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {persona.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="text-3xl font-semibold text-white">導入モデル</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="badge">個人無料枠</p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              初めての挑戦を後押し
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              ポートフォリオ出力回数と保管期間に上限を設けたエントリープラン。活動ログの集約と自己理解から始められます。
            </p>
          </div>
          <div className="card">
            <p className="badge">学校ライセンス</p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              学年・学科単位での運用
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Google Workspace for Education や SAML
              によるシングルサインオン、監査ログ、教員向けダッシュボードを提供します。
            </p>
          </div>
          <div className="card">
            <p className="badge">企業スポンサー</p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              伴走型タイアップ
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              大会や教育プログラムにおけるスポンサー連携向け。若者支援のKPIと成果可視化を共創します。
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="card items-center bg-primary/10 text-center">
          <h2 className="text-3xl font-semibold text-white">
            まずはオンラインデモから
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            教職員・高校生・スポンサー企業向けにカスタマイズされたデモを実施しています。3営業日以内に担当よりご連絡いたします。
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
            {ctaButtons.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold text-primary-light transition hover:border-primary hover:bg-primary/30 hover:text-white"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
