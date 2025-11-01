import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社情報",
  description: "Sazanami Inc.のミッション、沿革、経営体制をご紹介します。",
};

const leadership = [
  {
    name: "代表取締役 CEO / 共同創業者",
    person: "山城 玲央",
    bio: "元高校教員。教育データの利活用で文部科学省プロジェクトに従事し、教育現場のICT推進を牽引。",
  },
  {
    name: "取締役 CTO / 共同創業者",
    person: "田島 凌大",
    bio: "機械学習エンジニア。OpenTelemetryコミュニティでの活動経験を基に、教育向け安全設計をリード。",
  },
  {
    name: "Chief Privacy Officer",
    person: "杉本 陽子",
    bio: "弁護士（日本/NY州）。教育・未成年者のデータ利活用に関するガイドライン策定を支援。",
  },
];

const milestones = [
  {
    year: "2022",
    event: "Sazanami Inc. 設立、教育データ透明化の研究開発を開始",
  },
  {
    year: "2023",
    event:
      "高校向けPoCプログラムを3校で開始。生成AIを活用した推薦文ドラフトを実装",
  },
  {
    year: "2024",
    event:
      "Sazanami-Analytics 正式ローンチ。スポンサー企業とのタイアッププラン提供を開始",
  },
  {
    year: "2025",
    event: "全国9校での導入、大学推薦向け提出フォーマットに正式対応",
  },
];

const partners = [
  "文部科学省 EdTech 研究事業（共同研究）",
  "東京都教育庁 DX 推進室（実証実験）",
  "Tech for High School Consortium",
];

export default function CompanyPage() {
  return (
    <div className="section-container">
      <section className="space-y-6">
        <p className="badge">Company</p>
        <h1 className="text-4xl font-semibold text-white">
          教育データの透明化と評価の再設計
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300">
          Sazanami
          Inc.は、AIとデータ活用により高校生の努力を「成長の証拠」へと昇華させるテックカンパニーです。教育現場と学習者が納得できる評価基盤をつくり、個々の挑戦が正当に評価される社会を目指しています。
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {leadership.map((leader) => (
          <div key={leader.person} className="card">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              {leader.name}
            </h2>
            <p className="mt-2 text-xl font-semibold text-white">
              {leader.person}
            </p>
            <p className="mt-3 text-sm text-slate-300">{leader.bio}</p>
          </div>
        ))}
      </section>

      <section className="card bg-white/5">
        <h2 className="text-2xl font-semibold text-white">沿革</h2>
        <dl className="mt-4 space-y-3 text-sm text-slate-300">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="flex flex-col gap-2 border-l border-primary/40 pl-4"
            >
              <dt className="text-sm font-semibold text-primary-light">
                {item.year}
              </dt>
              <dd>{item.event}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="card bg-primary/10">
        <h2 className="text-2xl font-semibold text-white">
          研究連携・パートナー
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
          {partners.map((partner) => (
            <li key={partner}>{partner}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate-400">
          ※ 掲載は許諾済みの実績のみ。ロゴ掲載ポリシーは現在検討中です。
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-lg">
        <h2 className="text-2xl font-semibold text-white">所在地・連絡先</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-200">本社所在地</h3>
            <p className="mt-1 text-sm text-slate-300">
              東京都千代田区丸の内2-4-1 丸ビル 12F
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-200">
              お問い合わせ
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              info@sazanami.ai（3営業日以内にご返信）
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
