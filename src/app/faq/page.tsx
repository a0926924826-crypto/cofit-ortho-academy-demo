import Link from "next/link";

export default function FAQPage() {
    const faqs = [
        { q: "拇指外翻一定要開刀嗎？", a: "不一定。輕度到中度的拇指外翻可以透過換穿寬楦頭鞋子、使用輔具及物理治療來緩解。若嚴重影響生活才建議手術。" },
        { q: "做完膝關節手術多久可以走路？", a: "通常術後第一天在醫護人員協助下即可使用助行器下床活動。確切進度需依醫師評估為準。" },
        { q: "骨質疏鬆可以運動嗎？", a: "可以的，且非常鼓勵！適度的負重運動（如快走、太極拳）有助於改善骨質密度並降低跌倒風險。" },
    ];

    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">骨科萬事通</h1>
            </header>

            <div className="flex-1 p-5">
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="請輸入您想問的骨科問題..."
                        className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />
                    <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <h2 className="font-bold text-slate-700 mb-4 px-1 flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    熱門快速解答
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-2 flex items-start">
                                <span className="text-blue-500 mr-2">Q:</span>
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-2 mt-2">
                                <span className="text-green-500 font-bold mr-2 inline-block">A:</span>
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center text-sm text-slate-400">
                    找不到答案嗎？ <Link href="/consult" className="text-blue-500 font-bold hover:underline">轉接線上護理師</Link>
                </div>
            </div>
        </div>
    );
}
