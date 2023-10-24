import { Clapperboard, Clock, History, Home, Library, ListVideo, PlaySquare, Repeat } from "lucide-react";
import { SmallSidebarItem } from "../components/SmallSidebarItem";
import { LargeSidebarSection } from "../components/LargeSidebarSection";
import { LargeSidebarItem } from "../components/LargeSidebarItem";
import playlists, { subscriptions } from "../data/playlists";
import { useSidebarContext } from "../context/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export function Sidebar() {
    const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

    return (
        <>
        <aside 
            className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1
            ${isLargeOpen ? "lg:hidden" : "lg:flex"}
            `}
        >
            <SmallSidebarItem Icon={Home} title="Home" url="/" />
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
            <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
            <SmallSidebarItem Icon={Library} title="Library" url="/library" />
        </aside>
        {isSmallOpen && (
            <div 
                onClick={close} 
                className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" 
            />
        )}
        <aside 
            className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden 
                pb-4 flex-col gap-2 px-2 lg:flex ${isLargeOpen ? "lg:flex" : "lg:hidden"}
                ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
            >
            <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
                <PageHeaderFirstSection />
            </div>
            <LargeSidebarSection visibleItemcount={1}>
                <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
                <LargeSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemcount={5}>
                <LargeSidebarItem Icon={Library} title="Library" url="/library" />
                <LargeSidebarItem Icon={History} title="History" url="/history" />
                <LargeSidebarItem Icon={PlaySquare} title="Your Videos" url="/your-videos" />
                <LargeSidebarItem Icon={Clock} title="Wath Later" url="/clock" />
                {playlists.map(playlist => (
                    <LargeSidebarItem key={playlist.id} Icon={ListVideo} title={playlist.name} url={`/playlist?list=${playlist.id}`} />
                ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemcount={5} title="Subscriptions">
                {subscriptions.map(subscription => (
                    <LargeSidebarItem 
                        key={subscription.id} 
                        Icon={subscription.url} 
                        title={subscription.title} 
                        url={`/subscriptions/${subscription.id}`} 
                    />
                ))}     
            </LargeSidebarSection>
        </aside>
        </>
    )
}

