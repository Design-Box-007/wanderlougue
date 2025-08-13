import { images } from "@/data/assets";
import TravelCard from "./TravelCard";
 
export default function BlogSection() {
  const blogs = [
    {
      image: images.categories6,
      title: "Bali On A Budget: How To Travel For $30 A Day",
      category: "Budget Trip",
      date: "Feb 25, 2025",
      author: "Timothy Willson",
    },
    {
      image: images.categories5,
      title: "Bali On A Budget: How To Travel For $30 A Day",
      category: "Budget Trip",
      date: "Feb 25, 2025",
      author: "Timothy Willson",
    },
    {
      image: images.categories4,
      title: "Bali On A Budget: How To Travel For $30 A Day",
      category: "Budget Trip",
      date: "Feb 25, 2025",
      author: "Timothy Willson",
    },
    {
      image: images.categories3,
      title: "Bali On A Budget: How To Travel For $30 A Day",
      category: "Budget Trip",
      date: "Feb 25, 2025",
      author: "Timothy Willson",
    },
    {
      image: images.categories2,
      title: "Bali On A Budget: How To Travel For $30 A Day",
      category: "Budget Trip",
      date: "Feb 25, 2025",
      author: "Timothy Willson",
    },
    {
      image: images.categories1,
      title: "Bali On A Budget: How To Travel For $30 A Day",
      category: "Budget Trip",
      date: "Feb 25, 2025",
      author: "Timothy Willson",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
      {blogs.map((blog, i) => (
        <TravelCard key={i} {...blog} />
      ))}
    </div>
  );
}
