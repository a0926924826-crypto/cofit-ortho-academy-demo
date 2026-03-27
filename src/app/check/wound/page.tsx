"use client";
import { useState } from "react";
import Link from "next/link";

export default function WoundCheckPage() {
    const [image, setImage] = useState<string | null>(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
            setResult(null);
        }
    };

    const startAnalysis = () => {
        if (!image) return;
        setAnalyzing(true);
        // Simulate AI analysis delay
        setTimeout(() => {
            setAnalyzing(false);
            setResult("Beta 分析結果：傷口周圍有輕微紅腫跡象，未見明顯化膿。建議保持乾燥與清潔，並使用生理食鹽水清理。若紅腫擴大或伴隨發燒，請立即就醫。");
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
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-slate-800 flex items-center">
                        傷口分析
                        <span className="ml-2 bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
                    </h1>
                </div>
            </header>

            <div className="flex-1 p-5 flex flex-col">
                {/* Warning Alert */}
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-xs text-amber-700">
                                本評估結果僅供參考，不能取代專業醫師診斷。若大量出血或傷口極深請立刻前往急診。
                            </p>
                        </div>
                    </div>
                </div>

                {!image ? (
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-rose-50 text-rose-400 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold text-slate-800 mb-2">上傳傷口照片</h2>
                            <p className="text-sm text-slate-500 mb-6">請在光線明亮處拍攝，並將傷口置於畫面中央。</p>

                            <label className="w-full bg-rose-500 active:bg-rose-600 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition-colors block shadow-md shadow-rose-200">
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
                    <div className="flex flex-col h-full flex-1">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4 h-[300px] relative overflow-hidden flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />

                            {analyzing && (
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                                    {/* Scan Line Animation */}
                                    <div className="absolute w-full h-1 bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
                                    <div className="w-12 h-12 border-4 border-white border-t-rose-500 rounded-full animate-spin mb-4 relative z-10"></div>
                                    <p className="font-bold relative z-10">AI 正在建立分析模組...</p>

                                    <style jsx>{`
                    @keyframes scan {
                      0% { top: 0%; opacity: 0; }
                      10% { opacity: 1; }
                      90% { opacity: 1; }
                      100% { top: 100%; opacity: 0; }
                    }
                  `}</style>
                                </div>
                            )}
                        </div>

                        {!result && !analyzing && (
                            <div className="flex gap-3 mt-auto">
                                <button
                                    onClick={() => setImage(null)}
                                    className="flex-1 bg-slate-200 active:bg-slate-300 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition-colors"
                                >
                                    重新選擇
                                </button>
                                <button
                                    onClick={startAnalysis}
                                    className="flex-[2] bg-rose-500 active:bg-rose-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-rose-200"
                                >
                                    開始分析
                                </button>
                            </div>
                        )}

                        {result && (
                            <div className="bg-white border border-rose-100 p-5 rounded-2xl shadow-lg mt-auto animate-in fade-in slide-in-from-bottom-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-rose-900 text-lg">分析報告</h3>
                                    </div>
                                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 rounded">Beta 版</span>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-xl mb-4">
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        {result}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setImage(null);
                                            setResult(null);
                                        }}
                                        className="flex-1 bg-white border border-slate-200 text-slate-600 text-center font-bold py-3 rounded-xl text-sm transition-colors active:bg-slate-50"
                                    >
                                        重新拍攝
                                    </button>
                                    <Link href="/consult" className="flex-1 bg-rose-500 active:bg-rose-600 text-white text-center font-bold py-3 rounded-xl text-sm shadow-sm transition-colors">
                                        聯絡護理師
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
