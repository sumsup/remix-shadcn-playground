import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "~/components/ui/sheet";

export default function SheetPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Remix + shadcn UI</h1>
      
      {/* 사이드바 버튼 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">사이드바 열기</Button>
        </SheetTrigger>
        <SheetContent side="left"> {/* left / right / top / bottom 가능 */}
          <SheetHeader>
            <SheetTitle>내 사이드바</SheetTitle>
            <SheetDescription>여기에 메뉴를 추가할 수 있어요.</SheetDescription>
          </SheetHeader>
          <nav className="mt-4 flex flex-col space-y-2">
            <Button variant="ghost">홈</Button>
            <Button variant="ghost">설정</Button>
            <Button variant="ghost">로그아웃</Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
