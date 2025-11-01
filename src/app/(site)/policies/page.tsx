import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポリシー",
  description:
    "プライバシーポリシー、利用規約、AIポリシーなどの各種ポリシーを掲載しています。",
};

const policies = [
  {
    title: "プライバシーポリシー（ドラフト）",
    updatedAt: "2025-05-01",
    owner: "Chief Privacy Office",
    body: `Sazanami Inc.は、本人および管理者の同意を得た上で教育データを取得します。第三者提供は本人同意なく行わず、利用目的を限定して運用します。削除・開示・訂正の請求には原則7営業日以内に対応します。`,
  },
  {
    title: "利用規約（ドラフト）",
    updatedAt: "2025-05-01",
    owner: "Business Development Office",
    body: `本サービスは高校生と教育機関向けに提供され、利用者は法令と学校の規則を遵守する必要があります。未成年利用者は保護者の同意が必要です。禁止行為には不正アクセス、虚偽情報の登録、知的財産権侵害などが含まれます。`,
  },
  {
    title: "AIポリシー（ドラフト）",
    updatedAt: "2025-05-01",
    owner: "AI Governance Team",
    body: `生成AIによる要約・推薦文にはAI利用を明示し、最終確認は利用者が行います。生成物の著作権が曖昧な場合は警告と再提出依頼を行い、安全が担保できない場合は出力を停止します。`,
  },
  {
    title: "セキュリティ声明（ドラフト）",
    updatedAt: "2025-05-01",
    owner: "Security Office",
    body: `通信経路の暗号化、権限制御、監査ログによりデータの機密性・完全性・可用性を確保します。重大インシデント発生時は24時間以内に暫定報告を行い、対応状況を透明化します。`,
  },
];

export default function PoliciesPage() {
  return (
    <div className="section-container">
      <header className="space-y-4">
        <p className="badge">Policies</p>
        <h1 className="text-4xl font-semibold text-white">
          信頼性を支えるポリシー群
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          本ページの各ポリシーはドラフト版です。正式公開までに教育現場および法務専門家のレビューを経て更新予定です。更新履歴は公開し、透明性のある運用を徹底します。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {policies.map((policy) => (
          <article key={policy.title} className="card bg-white/5">
            <h2 className="text-xl font-semibold text-white">{policy.title}</h2>
            <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400">
              <div>
                <dt>最終更新</dt>
                <dd>{policy.updatedAt}</dd>
              </div>
              <div>
                <dt>責任部署</dt>
                <dd>{policy.owner}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 whitespace-pre-line">
              {policy.body}
            </p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-primary/10 p-8 text-left">
        <h2 className="text-2xl font-semibold text-white">問い合わせ窓口</h2>
        <p className="mt-3 text-sm text-slate-300">
          ポリシーに関するお問い合わせは{" "}
          <a href="mailto:privacy@sazanami.ai" className="underline">
            privacy@sazanami.ai
          </a>{" "}
          までご連絡ください。
        </p>
      </div>
    </div>
  );
}
