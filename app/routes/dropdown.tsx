"use client";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";

export default function Dropdown() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Remix + shadcn UI</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">메뉴 열기</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => alert("옵션 1 선택!")}>
            옵션 1
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert("옵션 2 선택!")}>
            옵션 2
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert("옵션 3 선택!")}>
            옵션 3
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
