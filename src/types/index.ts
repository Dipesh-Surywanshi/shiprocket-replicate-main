import { IconType } from "react-icons";

export interface SidebarItemProp{
    title: string;
    address: string;
    Icon: IconType;
    isActive?: boolean;
    isExpanded?: boolean;
    onItemClick: (title: string) => void;
}