import { ElementType, ReactNode } from "react";

export type SidebarProp = {
    Icon: ElementType;
    title: string;
    url: string;
};

export type LargeSidebarProp = SidebarProp & {
    Icon: ElementType | string;
    isActive?: boolean
};

export type LargesidebarSectionProp = {
    children: ReactNode;
    title?: string;
    visibleItemcount?: number;
}