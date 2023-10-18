import { useState } from "react";
import { Categories } from "./components/Categories";
import { categories } from "./data/categories";
import { PageHeader } from "./layouts/PageHeader";

export default function App() {  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return <div className="max-h-screen flex flex-col">
    <PageHeader />
    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
      <div>Sidebar</div>
      <div className="sticky top-0 bg-white z-10 pb-4">
        <Categories 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelect={setSelectedCategory}
        />
      </div>
    </div>
  </div>
}
