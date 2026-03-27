import Link from "next/link";

export default function Home() {
  const primaryFeatures = [
    {
      title: "我哪裡有問題？",
      subtitle: "拍照即時分析",
      href: "/check",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 mb-1 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
      bg: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "我要看醫師",
      subtitle: "門診候補轉介",
      href: "/doctor",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 mb-1 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13h2m-2 4h2M5 13H3m2 4H3" />
        </svg>
      ),
      bg: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "線上詢問",
      subtitle: "立即諮詢",
      href: "/consult",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 mb-1 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      bg: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
  ];

  const secondaryFeatures = [
    {
      title: "復健怎麼做",
      subtitle: "必學居家訓練課",
      href: "/rehab",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 mb-1 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "我的恢復進度",
      subtitle: "紀錄疼痛與活動",
      href: "/progress",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 mb-1 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: "骨科萬事通",
      subtitle: "AI快速解答",
      href: "/faq",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 mb-1 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-[#111111] text-white overflow-hidden">
      {/* LINE Header */}
      <header className="flex justify-between items-center px-4 py-3 bg-[#0a0a0a] border-b border-[#222] sticky top-0 z-20">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="bg-[#8e9094] text-white text-[10px] px-1 py-0.5 rounded mr-1">🛡️</span>
              <h1 className="font-bold text-[15px]">Cofit 骨關節學院</h1>
            </div>
            <p className="text-[11px] text-[#8e9094] mt-0.5">此官方帳號正在自動回覆訊息</p>
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 flex flex-col pt-6 pb-2 scrollbar-hide">
        <div className="text-center text-xs text-[#8e9094] font-medium mb-2">今天</div>

        {/* Bot Message 1 */}
        <div className="flex items-start max-w-[85%]">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[10px] text-blue-500 font-bold mr-3 shrink-0 shadow-sm overflow-hidden">
            <span className="leading-tight text-center relative top-[-1px]">Cofit<br />骨關節</span>
          </div>

          <div className="flex items-end">
            <div className="bg-[#2a2b2d] rounded-2xl p-3.5 text-[15px] leading-[1.6] text-gray-100 rounded-tl-sm shadow-sm relative">
              Olga 歐嘎您好！<br />
              我是Cofit 骨關節學院 👋<br /><br />
              如果您最近有點不舒服<br />
              我可以幫您看看 👀<br />
              直接告訴我狀況<br />
              （例如：哪裡痛、哪個動作卡）<br /><br />
              或點下面選單開始🔽
            </div>
            <span className="text-[10px] text-[#8e9094] ml-2 mb-1 shrink-0">12:33</span>
          </div>
        </div>
      </div>

      {/* Rich Menu Container */}
      <div className="bg-white px-2 pt-3 pb-2 select-none">
        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {primaryFeatures.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${item.bg} flex flex-col items-center justify-center p-2 rounded-xl text-white transition-transform active:scale-95 shadow-sm`}
              style={{ height: '110px' }}
            >
              {item.icon}
              <h2 className="font-bold text-[13px] mb-0.5 text-center leading-tight whitespace-nowrap">{item.title}</h2>
              <p className="text-[10px] text-blue-100 text-center whitespace-nowrap opacity-90">{item.subtitle}</p>
            </Link>
          ))}
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-2">
          {secondaryFeatures.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-[#f0f4f9] flex flex-col items-center justify-center p-2 rounded-xl transition-transform active:scale-95 shadow-sm"
              style={{ height: '110px' }}
            >
              {item.icon}
              <h2 className="font-bold text-[13px] text-slate-800 mb-0.5 text-center leading-tight whitespace-nowrap">{item.title}</h2>
              <p className="text-[10px] text-slate-500 text-center whitespace-nowrap">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* LINE Input Bar */}
      <div className="bg-[#0a0a0a] px-5 py-3 flex items-center justify-between text-[#8e9094] text-[15px] border-t border-[#222]">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <div className="font-medium">選單 ▾</div>
        <span className="w-6 h-6"></span>
      </div>
    </div>
  );
}
