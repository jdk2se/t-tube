import { LargesidebarSectionProp } from "../types/SidebarProp";
import { Children, useState } from "react";
import { Button } from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function LargeSidebarSection({ 
    children,
    title,
    visibleItemcount = Number.POSITIVE_INFINITY 
}: LargesidebarSectionProp) {
    const [isExtended, setIsExtended] = useState(false);
    const childrenArray = Children.toArray(children).flat();
    const visibleChildren = isExtended ? childrenArray : childrenArray.slice(0, visibleItemcount);    
    const showExpandButton = childrenArray.length > visibleItemcount;
    const ButtonIcon = isExtended ? ChevronUp : ChevronDown;

    return <div>
        {title && <div className="ml-4 mt-2 text-lg mb-1">
            {title}
        </div>}
        {visibleChildren}
        {showExpandButton && <Button 
            variant="ghost" 
            className="w-full flex items-center rounded-lg gap-4 p-3"
            onClick={() => setIsExtended(e => !e)}
        >
            <ButtonIcon className="w-6 h-6" />
            <div>{isExtended ? "Show less" : "Show more"}</div>
        </Button>
        }
    </div>
}