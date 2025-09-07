"use client";
import { Button } from "@/components/ui/button";
import { FiMessageCircle } from "react-icons/fi";

// interface StudentAvatarProps {
//   student: {
//     id: string;
//     name: string;
//     avatar: string;
//     online: boolean;
//   };
//   onClick: (student: any) => void;
// }

export const StudentAvatar = ({ student, onClick }: any) => (
  <div
    className="flex items-center justify-between space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
    onClick={() => onClick(student)}
  >
    <div className="flex items-start gap-2">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
          {student.avatar}
        </div>
        {student.online && (
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="text-xs">
        <p className="font-medium text-gray-900">
          {student.name.length > 13
            ? `${student.name.slice(0, 13)}...`
            : student.name}
        </p>
        <p className="text-gray-500">{student.online ? "Online" : "Offline"}</p>
      </div>
    </div>
    <Button
      size="sm"
      variant="ghost"
      className="text-xs px-2 py-1 h-auto text-[#7058E8] flex items-center gap-2"
    >
      <FiMessageCircle className="text-lg" />
      Message
    </Button>
  </div>
);
