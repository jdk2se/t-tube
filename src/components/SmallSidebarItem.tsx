import { SidebarProp } from "../types/SidebarProp";
import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";

export function SmallSidebarItem({ Icon, title, url }: SidebarProp) {
    return <a href={url} className={twMerge(buttonStyles({variant: "ghost"}), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
        <Icon className="w-6 h-6" />
        <div className="text-sm">{title}</div>
    </a>
}