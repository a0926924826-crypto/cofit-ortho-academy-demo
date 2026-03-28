"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BalanceTestPage() {
    const [testing, setTesting] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (testing && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (testing && timeLeft === 0) {
            setTesting(false);
            setAnalyzing(true);
        }
        return () => clearTimeout(timer);
    }, [testing, timeLeft]);

    useEffect(() => {
        if (analyzing) {
            const timer = setTimeout(() => {
                setAnalyzing(false);
                setResult(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [analyzing]);

    const startTest = () => {
        setTesting(true);
        setTimeLeft(10);
        setResult(false);
        setAnalyzing(false);
    };

    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-amber-50">
            <header className="bg-white px-5 py-4 border-b border-slate-100 flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/check" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">平衡穩定度測試</h1>
            </header>

            <div className="flex-1 p-5 flex flex-col items-center justify-center">
                {!testing && !analyzing && !result && (
                    <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-5 border border-amber-100/50">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-3">10秒鐘單腳站立測試</h2>
                        <div className="bg-slate-50 p-4 rounded-2xl mb-6 text-left w-full space-y-3">
                            <div className="flex items-start">
                                <span className="bg-amber-100 text-amber-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5 shrink-0">1</span>
                                <span className="text-[14px] text-slate-600 leading-snug">尋找平坦地面，旁邊要有可以扶的牆或桌子確保安全。</span>
                            </div>
                            <div className="flex items-start">
                                <span className="bg-amber-100 text-amber-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5 shrink-0">2</span>
                                <span className="text-[14px] text-slate-600 leading-snug">雙手叉腰，將單腳微微抬離地面。</span>
                            </div>
                            <div className="flex items-start">
                                <span className="bg-amber-100 text-amber-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5 shrink-0">3</span>
                                <span className="text-[14px] text-slate-600 leading-snug">按下開始按鈕後，請盡力維持平衡不要放下腳。</span>
                            </div>
                        </div>

                        <button
                            onClick={startTest}
                            className="w-full bg-amber-500 active:bg-amber-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-amber-200/50"
                        >
                            準備好了，開始測試
                        </button>
                    </div>
                )}

                {testing && (
                    <div className="flex flex-col items-center justify-center w-full max-w-sm h-[300px]">
                        <div className="relative w-56 h-56 flex items-center justify-center drop-shadow-md">
                            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-amber-200/50" />
                                <circle
                                    cx="112" cy="112" r="100"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    strokeDasharray={100 * 2 * Math.PI}
                                    strokeDashoffset={100 * 2 * Math.PI * (1 - timeLeft / 10)}
                                    className="text-amber-500 transition-all duration-1000 ease-linear drop-shadow-sm"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="flex flex-col items-center">
                                <div className="text-6xl font-black text-amber-600 tracking-tighter relative z-10">{timeLeft}</div>
                                <div className="text-sm font-bold text-amber-700/60 mt-1 uppercase tracking-widest">sec</div>
                            </div>
                        </div>
                        <div className="mt-10 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-amber-100/50 animate-pulse">
                            <p className="text-lg font-bold text-slate-700">請保持穩定不放腳...</p>
                        </div>
                    </div>
                )}

                {analyzing && (
                    <div className="flex flex-col items-center justify-center w-full max-w-sm h-[300px]">
                        <div className="w-16 h-16 relative">
                            <div className="w-full h-full border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">AI分析中...</h3>
                        <p className="text-slate-500 text-sm">正在根據您的穩定程度運算風險等級，請稍候</p>
                    </div>
                )}

                {result && (
                    <div className="w-full max-w-sm bg-white p-5 rounded-2xl shadow-lg border border-slate-100 animate-in fade-in slide-in-from-bottom-4 mb-20">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg">AI初步分析結果</h3>
                            </div>
                            <button onClick={startTest} className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded">重新檢測</button>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl mt-2 mb-5 border border-slate-100 shadow-inner">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-sm font-bold text-slate-600">穩定度檢測分數</span>
                                <span className="text-3xl font-black text-amber-500 tracking-tight leading-none">
                                    78 <span className="text-sm font-medium text-slate-400 align-top">/100</span>
                                </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2 overflow-hidden">
                                <div className="bg-amber-400 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '78%' }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-slate-400 font-medium font-mono">0</span>
                                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-sm">中等風險</span>
                                <span className="text-xs text-slate-400 font-medium font-mono">100</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 mb-1 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                                    狀況判讀
                                </h4>
                                <p className="text-slate-700 text-[15px] leading-relaxed">
                                    您的單腳站立穩定度落在正常與警戒值之間，下肢力量與本體感覺有些許不足，存在輕微跌倒風險。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-500 mb-1 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                                    可能原因
                                </h4>
                                <p className="text-slate-700 text-[15px] leading-relaxed">
                                    可能因缺乏規律下肢運動、年齡增長導致肌力自然流失，或是曾有腳踝扭傷等舊傷影響平衡感。
                                </p>
                            </div>
                            <div className="bg-amber-50/50 p-4 rounded-xl mt-2 border border-amber-100/50">
                                <h4 className="text-sm font-bold text-amber-800 mb-2">建議改善方針</h4>
                                <ul className="text-[15px] text-amber-900 space-y-2.5">
                                    <li className="flex items-start">
                                        <span className="text-amber-500 mr-2 shrink-0">✔</span> 
                                        <span>每日進行3次單腳站立練習，每次盡量維持10秒以上</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-500 mr-2 shrink-0">✔</span> 
                                        <span>加入簡單的下肢肌群訓練，如深蹲或踮腳尖運動</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-500 mr-2 shrink-0">✔</span> 
                                        <span>若有經常性跌倒或腿部無力感，建議預約復健科或骨科門診</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Sticky Footer CTA */}
            {result && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 pb-safe-4 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-20 flex justify-center space-x-2">
                    <Link href="/doctor" className="flex-1 bg-white border border-slate-300 text-slate-700 text-center font-bold py-2.5 rounded-xl text-[13px] transition-colors active:bg-slate-50 flex items-center justify-center">
                        預約醫師
                    </Link>
                    <Link href="/consult" className="flex-1 bg-white border border-slate-300 text-slate-700 text-center font-bold py-2.5 rounded-xl text-[13px] transition-colors active:bg-slate-50 flex items-center justify-center">
                        線上諮詢
                    </Link>
                    <a href="#" onClick={(e) => e.preventDefault()} className="flex-1 bg-[#00B900] text-white text-center font-bold py-2.5 rounded-xl text-[13px] shadow-sm transition-colors active:bg-[#00a000] flex items-center justify-center">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.931 8.91 9.4 9.613.367.081.868.246 1.002.564.12.285.081.731.039 1.034-.052.378-.328 1.97-.402 2.373-.122.659.324.873.844.544.387-.246 2.064-1.291 3.525-2.287 1.503-1.026 4.332-3.137 5.794-4.576 2.457-2.422 3.798-4.99 3.798-7.265z" />
                        </svg>
                        加入LINE
                    </a>
                </div>
            )}
        </div>
    );
}
