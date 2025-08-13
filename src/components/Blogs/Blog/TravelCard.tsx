import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface TravelCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  author: string;
}

export default function TravelCard({
  image,
  title,
  category,
  date,
  author,
}: TravelCardProps) {
  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer font-urbanist">
       
       
      {/* Full Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Bottom Info Card */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-50">
          {/* Category */}
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {category}
          </span>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-3 leading-tight line-clamp-2">
            {title}
          </h3>
          
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-gray-400" />
              {author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
