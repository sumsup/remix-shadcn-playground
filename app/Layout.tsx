import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {/* 아래 children에 현재 라우트에 매핑된 컴포넌트를 표시한다. */}
                {children}
            </main>
        </SidebarProvider>
    )
}
