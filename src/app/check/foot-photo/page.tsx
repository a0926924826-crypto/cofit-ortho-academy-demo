"use client";
import { useState } from "react";
import Link from "next/link";

export default function FootPhotoPage() {
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
            setResult("根據照片分析，您的拇指外翻角度約為 15 度，屬於輕度層級。建議可以進行足底肌肉放鬆運動，並選擇寬楦頭的鞋子。若有疼痛感，請盡速就醫。");
        }, 2000);
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
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4 h-[300px] relative overflow-hidden flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />

                            {analyzing && (
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <p className="font-bold">AI 正在分析您的照片...</p>
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
                                    className="flex-[2] bg-blue-600 active:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-blue-200"
                                >
                                    開始分析
                                </button>
                            </div>
                        )}

                        {result && (
                            <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl animate-in fade-in slide-in-from-bottom-4 mt-auto">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-blue-900 text-lg">分析完成</h3>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                    {result}
                                </p>
                                <div className="flex gap-2">
                                    <Link href="/doctor" className="flex-1 bg-white border border-blue-200 text-blue-600 text-center font-bold py-2.5 rounded-lg text-sm">
                                        預約看診
                                    </Link>
                                    <Link href="/rehab" className="flex-1 bg-blue-600 text-white text-center font-bold py-2.5 rounded-lg text-sm shadow-sm">
                                        查看復健課程
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
