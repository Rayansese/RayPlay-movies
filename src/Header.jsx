import { Search, Film, Bell, Moon, Sun } from 'lucide-react'

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between 
            bg-[#090205]/80 light:bg-white/80 backdrop-blur-md border-b border-white/5 light:border-black/5 
            transition-all duration-300">
            
            {/* Logo Section */}
            <div className="flex items-center gap-2 cursor-pointer group">
                <div className="p-2 bg-gradient-to-tr from-[#1ecad3] to-blue-500 rounded-lg group-hover:shadow-[0_0_20px_rgba(30,202,211,0.5)] transition-all duration-300">
                    <Film className="w-6 h-6 text-white fill-white/20" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white light:text-slate-900">
                    Ray<span className="text-[#1ecad3]">Play</span>
                </h1>
            </div>

            {/* Search Section */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#1ecad3] transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2.5 
                        bg-white/5 light:bg-slate-100 
                        border border-white/10 light:border-slate-200 
                        rounded-full leading-5 
                        text-gray-300 light:text-slate-700 
                        placeholder-gray-400 light:placeholder-slate-400
                        focus:outline-none focus:bg-white/10 light:focus:bg-white
                        focus:border-[#1ecad3]/50 focus:ring-1 focus:ring-[#1ecad3]/50 
                        sm:text-sm transition-all duration-300"
                    placeholder="Search movies, shows, actors..."
                />
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-4">
                <button 
                    onClick={toggleTheme}
                    className="p-2 text-gray-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 
                        rounded-full transition-all bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200"
                    title="Toggle theme"
                >
                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>

                <button className="p-2 text-gray-400 light:text-slate-500 bg-white/5 light:bg-slate-100 
                    hover:text-white light:hover:text-slate-900 rounded-full transition-all 
                    hover:bg-white/10 light:hover:bg-slate-200">
                    <Bell className="w-5 h-5" />
                </button>
                
                <button className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-white/5 light:hover:bg-slate-100 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-sm font-medium text-white shadow-lg group-hover:scale-105 transition-transform">
                        R
                    </div>
                    <span className="text-sm font-medium text-gray-300 light:text-slate-700 group-hover:text-white light:group-hover:text-slate-900 hidden sm:block">Rayan</span>
                </button>
            </div>
        </header>
    )
}