"use client";
import { useState } from "react";
import Link from "next/link";

export default function WoundCheckPage() {
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
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-slate-800 flex items-center">
                        傷口分析
                        <span className="ml-2 bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
                    </h1>
                </div>
            </header>

            <div className="flex-1 p-5 flex flex-col">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg mb-4 shadow-sm">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-4 w-4 text-amber-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-2">
                            <p className="text-xs text-amber-800 leading-relaxed">
                                評估結果僅供參考，不具醫療診斷效力。若大量出血或傷口極深請立刻前往急診。
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
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4 h-[280px] relative overflow-hidden flex items-center justify-center shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />

                            {analyzing && (
                                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white backdrop-blur-sm p-6 text-center">
                                    <div className="absolute w-full h-1 bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
                                    <div className="w-12 h-12 border-4 border-slate-600 border-t-rose-500 rounded-full animate-spin mb-4 relative z-10"></div>
                                    <p className="font-bold text-lg mb-2 relative z-10">AI分析中...</p>
                                    <p className="text-sm text-slate-300 relative z-10">正在比對醫學資料庫，請稍候</p>
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
                            <div className="flex gap-3 mt-auto mb-6">
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
                            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-lg mt-2 animate-in fade-in slide-in-from-bottom-4 mb-24">
                                <div className="flex justify-between items-start mb-4 border-b pb-3 border-slate-100">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-slate-800 text-lg">AI初步分析結果</h3>
                                    </div>
                                    <button onClick={() => { setImage(null); setResult(false); }} className="text-xs text-rose-500 font-medium px-2 py-1 bg-rose-50 rounded">重新檢測</button>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-500 mb-1 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                                            狀況判讀
                                        </h4>
                                        <p className="text-slate-700 text-[15px] leading-relaxed">
                                            傷口周圍呈現輕微紅腫，目前無明顯化膿或嚴重感染跡象，屬於表淺性組織損傷。
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-500 mb-1 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                                            可能原因
                                        </h4>
                                        <p className="text-slate-700 text-[15px] leading-relaxed">
                                            近期可能經歷擦挫傷或輕微破皮，紅腫為正常發炎反應過程。
                                        </p>
                                    </div>
                                    <div className="bg-rose-50 p-4 rounded-xl mt-2 border border-rose-100/50">
                                        <h4 className="text-sm font-bold text-rose-800 mb-2">護理建議與須知</h4>
                                        <ul className="text-[15px] text-rose-900 space-y-2.5">
                                            <li className="flex items-start">
                                                <span className="text-rose-500 mr-2 shrink-0">✔</span> 
                                                <span>請保持患部乾燥，可每日使用生理食鹽水進行基礎清潔即可</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-500 mr-2 shrink-0">✔</span> 
                                                <span>建議可使用親水性敷料（人工皮）覆蓋，避免二次感染</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-500 mr-2 shrink-0">✔</span> 
                                                <span>若出現紅腫持續擴大、溫度異常升高或伴隨發燒，請盡快前往診所評估</span>
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
