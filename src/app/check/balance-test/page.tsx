"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BalanceTestPage() {
    const [testing, setTesting] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (testing && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (testing && timeLeft === 0) {
            setTesting(false);
            setResult("測試完成！您的下肢穩定度良好。建議可以每天進行 3 次單腳站立練習來維持平衡感，預防跌倒。");
        }
        return () => clearTimeout(timer);
    }, [testing, timeLeft]);

    const startTest = () => {
        setTesting(true);
        setTimeLeft(10);
        setResult(null);
    };

    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-amber-50/30">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/check" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">平衡穩定度測試</h1>
            </header>

            <div className="flex-1 p-5 flex flex-col items-center justify-center">
                {!testing && !result && (
                    <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">10秒鐘單腳站立測試</h2>
                        <p className="text-sm text-slate-500 mb-6 text-left space-y-2">
                            <span className="block">1. 尋找平坦且安全的地面，旁邊有可以扶持的牆面或桌子。</span>
                            <span className="block">2. 雙手叉腰，將一腳稍微抬離地面。</span>
                            <span className="block">3. 按下開始按鈕後，請盡量保持平衡。</span>
                        </p>

                        <button
                            onClick={startTest}
                            className="w-full bg-amber-500 active:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md shadow-amber-200"
                        >
                            準備好了，開始測試
                        </button>
                    </div>
                )}

                {testing && (
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-amber-100" />
                                <circle
                                    cx="96" cy="96" r="88"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={88 * 2 * Math.PI}
                                    strokeDashoffset={88 * 2 * Math.PI * (1 - timeLeft / 10)}
                                    className="text-amber-500 transition-all duration-1000 ease-linear"
                                />
                            </svg>
                            <div className="text-5xl font-bold text-amber-600 relative z-10">{timeLeft}</div>
                        </div>
                        <p className="mt-8 text-xl font-bold text-slate-700">請保持平衡...</p>
                    </div>
                )}

                {result && (
                    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg border border-slate-100 animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-800 text-xl">測試完成</h3>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 mb-6">
                            <p className="text-green-800 font-medium leading-relaxed">
                                {result}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={startTest}
                                className="flex-[1] bg-slate-100 active:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition-colors text-sm"
                            >
                                換腳再測
                            </button>
                            <Link
                                href="/rehab"
                                className="flex-[2] block text-center bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-sm"
                            >
                                查看強化平衡訓練
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
