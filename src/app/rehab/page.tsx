import Link from "next/link";

export default function RehabPage() {
    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">復健怎麼做</h1>
            </header>

            <div className="flex-1 p-5 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">居家復健課程</h2>
                <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">
                    針對您的個別狀況，我們量身訂做了一套居家復健影片，敬請期待。
                </p>
                <button className="w-full max-w-xs bg-slate-200 text-slate-400 font-bold py-3.5 px-4 rounded-xl cursor-not-allowed">
                    課程準備中
                </button>
            </div>
        </div>
    );
}
