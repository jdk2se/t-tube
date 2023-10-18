import { Button } from "./Button";

type CategoryProps = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void
}

export function Categories ({ categories, selectedCategory, onSelect }: CategoryProps) {
    return <div className="overflow-x-hidden relative">
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
            {categories.map((category) => (
                <Button 
                    key={category}
                    onClick={() => onSelect(category)}
                    variant={selectedCategory === category ? "dark" : "default"} 
                    className="py-1 px-3 rounded-lg whitespace-nowrap"  
                >
                {category}
            </Button>
            ))}            
        </div>
    </div>
}