import Link from "next/link";

export default function ConsultPage() {
    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">線上詢問</h1>
            </header>

            <div className="flex-1 p-5 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">立即諮詢護理師</h2>
                <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">
                    有骨關節或傷口相關疑問？我們線上的專業團隊可以為您提供初步解答。
                </p>
                <button className="w-full max-w-xs bg-blue-600 active:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-blue-200">
                    開啟對話
                </button>
            </div>
        </div>
    );
}
