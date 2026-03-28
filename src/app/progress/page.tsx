import Link from "next/link";

export default function ProgressPage() {
    const records = [
        { date: "今天", score: 78, risk: "中等風險", riskColor: "text-amber-600 bg-amber-100", activity: "單腳站立 10秒", note: "比起上週更穩定，搖晃幅度減少" },
        { date: "一週前", score: 65, risk: "中高風險", riskColor: "text-orange-600 bg-orange-100", activity: "單腳站立 8秒", note: "還是有些搖晃，撐不到10秒" },
        { date: "兩週前", score: 45, risk: "高風險", riskColor: "text-red-600 bg-red-100", activity: "單腳站立 4秒", note: "立刻失去平衡，需要扶牆" },
    ];

    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b border-slate-100 flex items-center justify-between shadow-sm sticky top-0 z-10">
                <div className="flex items-center">
                    <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-slate-800">檢測數據分析</h1>
                </div>
                <button className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1.5 rounded-lg">
                    查看報告
                </button>
            </header>

            <div className="flex-1 p-5">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 mb-6">
                    <h2 className="font-bold text-slate-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        最新檢測結果
                    </h2>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-inner">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-slate-600">下肢穩定度</span>
                            <span className="text-3xl font-black text-blue-600 tracking-tight leading-none">
                                78 <span className="text-sm font-medium text-slate-400 align-top">/100</span>
                            </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2 overflow-hidden">
                            <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '78%' }}></div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-[10px] text-slate-400 font-bold font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">0</span>
                            <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2.5 py-1 rounded-md">中等風險</span>
                            <span className="text-[10px] text-slate-400 font-bold font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">100</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 mb-6">
                    <h2 className="font-bold text-slate-800 mb-6 flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        分數成長趨勢
                    </h2>
                    <div className="h-36 flex items-end gap-3 px-2 mb-2 pb-2 border-b border-slate-100">
                        <div className="flex-1 bg-red-400 rounded-t-md h-[45%] opacity-70 relative group flex justify-center">
                            <span className="absolute -top-7 text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded shadow-sm">45</span>
                        </div>
                        <div className="flex-1 bg-orange-400 rounded-t-md h-[65%] opacity-80 relative group flex justify-center">
                            <span className="absolute -top-7 text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded shadow-sm">65</span>
                        </div>
                        <div className="flex-1 bg-blue-500 rounded-t-md h-[78%] opacity-100 relative group flex justify-center shadow-[0_-5px_15px_-5px_rgba(59,130,246,0.5)]">
                            <span className="absolute -top-7 text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded shadow-sm border border-blue-100">78</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 font-medium px-4">
                        <span>兩週前</span>
                        <span>一週前</span>
                        <span className="text-blue-500 font-bold">今天</span>
                    </div>
                </div>

                <h3 className="font-bold text-slate-700 mb-3 px-2">歷史紀錄</h3>
                <div className="space-y-3">
                    {records.map((r, i) => (
                        <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col relative overflow-hidden">
                            {i === 0 && <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>}
                            <div className="flex items-start mb-2">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="font-bold text-slate-800 text-[15px]">{r.activity}</div>
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${r.riskColor}`}>
                                            {r.risk}
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-400 font-medium">{r.date}</div>
                                </div>
                                <div className={`text-xl font-black ${i === 0 ? 'text-blue-600' : 'text-slate-600'}`}>
                                    {r.score}
                                </div>
                            </div>
                            <div className="text-sm text-slate-600 bg-slate-50 p-2.5 rounded-xl mt-1 border border-slate-100">
                                <span className="text-slate-400 mr-2 text-xs">💬</span>{r.note}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
