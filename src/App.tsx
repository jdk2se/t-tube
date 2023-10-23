import { useState } from "react";
import { Categories } from "./components/Categories";
import categories from "./data/categories";
import { PageHeader } from "./layouts/PageHeader";
import { VideoGridItem } from "./components/VideoGridItem";
import videos from './data/videos';

export default function App() {  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return <div className="max-h-screen flex flex-col">
    <PageHeader />
    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
      <div>Sidebar</div>
      <div className="overflox-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <Categories 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelect={setSelectedCategory}
          />
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {videos.map((video) => (
            <VideoGridItem key={video.id} {...video} />
          ))}
          
        </div>
      </div>
    </div>
  </div>
}
