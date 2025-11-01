import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "導入相談、個人利用、スポンサー連携、取材に関するお問い合わせ窓口です。",
};

const inquiryTypes = [
  { value: "school", label: "学校導入について" },
  { value: "individual", label: "個人利用について" },
  { value: "sponsor", label: "スポンサー・協賛について" },
  { value: "press", label: "取材・メディア掲載について" },
];

export default function ContactPage() {
  return (
    <div className="section-container">
      <header className="space-y-4">
        <p className="badge">Contact</p>
        <h1 className="text-4xl font-semibold text-white">お問い合わせ</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
          下記フォームよりご連絡ください。初回返信は3営業日以内を目安としています。静的サイトとして提供しているため、送信後にご利用のメールクライアントが起動します。
        </p>
      </header>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
        <form
          className="grid gap-6"
          action="mailto:contact@sazanami.ai"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-2">
            <label
              htmlFor="type"
              className="text-sm font-semibold text-slate-200"
            >
              お問い合わせ種別
            </label>
            <select
              id="type"
              name="お問い合わせ種別"
              className="rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
              required
            >
              <option value="">選択してください</option>
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.label}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-slate-200"
            >
              ご担当者名 / ご氏名
            </label>
            <input
              type="text"
              id="name"
              name="氏名"
              placeholder="例：佐々波 花子"
              className="rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-200"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="メールアドレス"
              placeholder="example@sazanami.ai"
              className="rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-200"
            >
              ご相談内容
            </label>
            <textarea
              id="message"
              name="ご相談内容"
              rows={6}
              placeholder="導入希望時期、利用予定人数、現在の課題など"
              className="rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <p>
              送信前に{" "}
              <a href="/policies" className="underline">
                ポリシー一覧
              </a>{" "}
              をご確認ください。
            </p>
            <p>
              送信後、メールクライアントが立ち上がらない場合は
              contact@sazanami.ai 宛てに直接ご連絡ください。
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40"
          >
            メールを作成する
          </button>
        </form>
      </div>
    </div>
  );
}
