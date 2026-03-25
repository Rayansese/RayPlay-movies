import { Play, Star } from 'lucide-react'

export default function Card({ movie }) {
    // Fallback if no movie prop (though we should always provide one)
    if (!movie) return (
        <div className="animate-pulse bg-white/5 light:bg-slate-200 aspect-[2/3] rounded-xl"></div>
    )
    
    return (
        <div className="group relative w-full cursor-pointer">
             {/* Image Container */}
             <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-800 light:bg-slate-200 relative shadow-lg group-hover:shadow-2xl transition-all duration-300 ring-1 ring-white/10 light:ring-black/5">
                <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 light:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <button className="p-4 bg-[#1ecad3] rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#1bbdc5] shadow-[0_0_30px_rgba(30,202,211,0.4)]">
                        <Play className="w-6 h-6 fill-current pl-1" />
                    </button>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 light:bg-white/90 backdrop-blur-md rounded-lg flex items-center gap-1.5 border border-white/10 light:border-black/5 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-white light:text-slate-900">{movie.rating}</span>
                </div>
             </div>
             
             {/* Content */}
             <div className="mt-4 px-1">
                <h3 className="text-white light:text-slate-900 font-semibold text-lg truncate group-hover:text-[#1ecad3] transition-colors leading-tight">
                    {movie.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-400 light:text-slate-500 font-medium">
                    <span>{movie.year}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 light:bg-slate-100 text-xs border border-white/5 light:border-slate-200">
                        {movie.genre}
                    </span>
                </div>
             </div>
        </div>
    )
}