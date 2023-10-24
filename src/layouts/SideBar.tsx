import { Clapperboard, Clock, History, Home, Library, ListVideo, PlaySquare, Repeat } from "lucide-react";
import { SmallSidebarItem } from "../components/SmallSidebarItem";
import { LargeSidebarSection } from "../components/LargeSidebarSection";
import { LargeSidebarItem } from "../components/LargeSidebarItem";
import playlists, { subscriptions } from "../data/playlists";

export function Sidebar() {
    return (
        <>
        <aside 
            className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden"
        >
            <SmallSidebarItem Icon={Home} title="Home" url="/" />
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
            <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
            <SmallSidebarItem Icon={Library} title="Library" url="/library" />
        </aside>
        <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
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

