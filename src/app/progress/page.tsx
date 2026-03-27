import Link from "next/link";

export default function ProgressPage() {
    const records = [
        { date: "2023-11-20", painLevel: 3, activity: "步行 30 分鐘", note: "感覺比起上週好多了" },
        { date: "2023-11-13", painLevel: 5, activity: "步行 15 分鐘", note: "還是有些隱隱作痛" },
        { date: "2023-11-06", painLevel: 8, activity: "無", note: "非常痛，無法下床" },
    ];

    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b flex items-center justify-between shadow-sm sticky top-0 z-10">
                <div className="flex items-center">
                    <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-slate-800">恢復進度</h1>
                </div>
                <button className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1.5 rounded-lg">
                    ＋ 新增紀錄
                </button>
            </header>

            <div className="flex-1 p-5">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-6">
                    <h2 className="font-bold text-slate-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        疼痛指數趨勢
                    </h2>
                    {/* Simple Mock Chart */}
                    <div className="h-32 flex items-end gap-2 px-2">
                        <div className="flex-1 bg-red-400 rounded-t-sm h-[80%] opacity-50 relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 group-hover:text-red-500">8</span></div>
                        <div className="flex-1 bg-orange-400 rounded-t-sm h-[50%] opacity-70 relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 group-hover:text-orange-500">5</span></div>
                        <div className="flex-1 bg-green-400 rounded-t-sm h-[30%] opacity-90 relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 group-hover:text-green-500">3</span></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-2 px-3 border-t pt-2">
                        <span>11/06</span>
                        <span>11/13</span>
                        <span>11/20</span>
                    </div>
                </div>

                <h3 className="font-bold text-slate-700 mb-3 px-1">歷史紀錄</h3>
                <div className="space-y-3">
                    {records.map((r, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mr-3 shrink-0 ${r.painLevel >= 7 ? 'bg-red-400' : r.painLevel >= 4 ? 'bg-orange-400' : 'bg-green-400'}`}>
                                {r.painLevel}
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 mb-1">{r.date}</div>
                                <div className="font-bold text-slate-800 text-sm mb-1">{r.activity}</div>
                                <div className="text-sm text-slate-600 bg-slate-50 p-2 rounded-lg mt-2 inline-block">
                                    &ldquo;{r.note}&rdquo;
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
