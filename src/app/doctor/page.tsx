import Link from "next/link";

export default function DoctorPage() {
    return (
        <div className="flex flex-col flex-1 pb-10 min-h-screen bg-slate-50">
            <header className="bg-white px-5 py-4 border-b flex items-center shadow-sm sticky top-0 z-10">
                <Link href="/" className="text-slate-500 mr-4 active:scale-95 transition-transform p-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-slate-800">門診候補轉介</h1>
            </header>

            <div className="flex-1 p-5 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">醫師門診預約</h2>
                <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">
                    我們提供線上候補登記服務，當有門診空檔時，將優先通知您。
                </p>
                <button className="w-full max-w-xs bg-blue-600 active:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-blue-200">
                    登記候補名單
                </button>
            </div>
        </div>
    );
}
