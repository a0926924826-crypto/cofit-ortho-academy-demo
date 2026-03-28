"use client";
import { useState } from "react";
import Link from "next/link";

export default function FootPhotoPage() {
    const [image, setImage] = useState<string | null>(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<boolean>(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
            setResult(false);
        }
    };

    const startAnalysis = () => {
        if (!image) return;
        setAnalyzing(true);
        // Simulate AI analysis delay
        setTimeout(() => {
            setAnalyzing(false);
            setResult(true);
        }, 2500);
    };

    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/check" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">腳拇指照片分析</h1>
            </header>

            <div className="flex-1 p-5 flex flex-col">
                {!image ? (
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold text-slate-800 mb-2">上傳腳部照片</h2>
                            <p className="text-sm text-slate-500 mb-6">請從正上方拍攝您的雙腳，確保光線充足且畫面清晰。</p>

                            <label className="w-full bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition-colors block">
                                選擇照片
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col h-full">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4 h-[300px] relative overflow-hidden flex items-center justify-center shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />

                            {analyzing && (
                                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white backdrop-blur-sm p-6 text-center">
                                    <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <p className="font-bold text-lg mb-2">AI分析中...</p>
                                    <p className="text-sm text-slate-300">正在比對醫學資料庫，請稍候</p>
                                </div>
                            )}
                        </div>

                        {!result && !analyzing && (
                            <div className="flex gap-3 mt-auto mb-6">
                                <button
                                    onClick={() => setImage(null)}
                                    className="flex-1 bg-slate-200 active:bg-slate-300 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition-colors"
                                >
                                    重新選擇
                                </button>
                                <button
                                    onClick={startAnalysis}
                                    className="flex-[2] bg-blue-600 active:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-blue-200"
                                >
                                    開始分析
                                </button>
                            </div>
                        )}

                        {result && (
                            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-lg mt-2 animate-in fade-in slide-in-from-bottom-4 mb-24">
                                <div className="flex items-center justify-between mb-4 border-b pb-3 border-slate-100">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-slate-800 text-lg">AI初步分析結果</h3>
                                    </div>
                                    <button onClick={() => { setImage(null); setResult(false); }} className="text-xs text-blue-500 font-medium px-2 py-1 bg-blue-50 rounded">重新檢測</button>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-500 mb-1 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            狀況判讀
                                        </h4>
                                        <p className="text-slate-700 text-[15px] leading-relaxed">
                                            根據照片影像分析，您的足部可能伴隨輕微外翻的傾角（約15度），屬於輕度層級。
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-500 mb-1 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                                            可能原因
                                        </h4>
                                        <p className="text-slate-700 text-[15px] leading-relaxed">
                                            長期穿著不合適的鞋具（如窄楦頭鞋）、足底肌肉力量不足，這也可能增加膝關節與腰部的負擔。
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl mt-2 border border-blue-100/50">
                                        <h4 className="text-sm font-bold text-blue-800 mb-2">建議改善方針</h4>
                                        <ul className="text-[15px] text-blue-900 space-y-2.5">
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2 shrink-0">✔</span> 
                                                <span>建議選擇寬楦頭、具足弓支撐性鞋具</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2 shrink-0">✔</span> 
                                                <span>加強足底及小腿肌群訓練（如抓毛巾運動）</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2 shrink-0">✔</span> 
                                                <span>若平常走路出現疼痛感，建議尋求專業骨科醫師評估</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        
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
                )}
            </div>
        </div>
    );
}
