import NavBar from "~/components/NavBar";

export default function NavBarPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 className="text-2xl font-bold">Remix + shadcn UI</h1>
            <NavBar />
        </div>
    );
}