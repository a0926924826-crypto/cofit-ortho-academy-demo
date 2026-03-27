import Link from "next/link";

export default function CheckPage() {
    const tests = [
        {
            title: "拍腳拇指照片",
            desc: "透過上傳圖片讓 AI 評估您的足部狀態",
            href: "/check/foot-photo",
            icon: "📸",
            color: "bg-blue-50 border-blue-200 text-blue-700"
        },
        {
            title: "站一下看穩不穩",
            desc: "10秒鐘平衡測試，評估下肢穩定度",
            href: "/check/balance-test",
            icon: "⚖️",
            color: "bg-amber-50 border-amber-200 text-amber-700"
        },
        {
            title: "拍傷口照",
            desc: "上傳傷口照片進行 AI 初步分析 (Beta)",
            href: "/check/wound",
            icon: "🩹",
            color: "bg-rose-50 border-rose-200 text-rose-700"
        }
    ];

    return (
        <div className="flex flex-col flex-1 pb-10">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">我哪裡有問題？</h1>
            </header>

            <div className="flex-1 p-5">
                <p className="text-slate-600 mb-6 text-sm">
                    請選擇您想要進行的檢測項目。我們將透過簡單的步驟為您提供初步的分析建議。
                </p>

                <div className="flex flex-col gap-4">
                    {tests.map((test, index) => (
                        <Link
                            key={index}
                            href={test.href}
                            className={`border p-5 rounded-2xl flex items-center shadow-sm transition-transform active:scale-[0.98] ${test.color}`}
                        >
                            <div className="text-3xl mr-4 bg-white/50 w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                                {test.icon}
                            </div>
                            <div className="flex-1">
                                <h2 className="font-bold text-lg mb-1">{test.title}</h2>
                                <p className="text-xs opacity-80 leading-relaxed">{test.desc}</p>
                            </div>
                            <div className="text-opacity-50 ml-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
