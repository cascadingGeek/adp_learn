"use client";
import { Avatar } from "@/components/peer-review/Avatar";
import { Contact } from "@/utils/types";

export const ContactItem = ({
  contact,
  isActive,
  onClick,
}: {
  contact: Contact;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-colors p-2 hover:bg-transparent ${
        isActive
          ? "bg-[#F7F7F8] border rounded-2xl border-[#B0B3B5]"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center space-x-3 relative">
        <Avatar isOnline={contact.isOnline}>{contact.avatar}</Avatar>

        <div className="flex-1 min-w-0">
          <div className="w-full relative">
            <span className="text-xs text-[#8A959C] block text-right">
              {contact.time}
            </span>
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {contact.name}
            </h3>
          </div>

          <p className="text-sm text-gray-500 truncate mt-0.5 font-light">
            {contact.lastMessage}
          </p>
        </div>

        {contact.unreadCount && (
          <div className="w-5 h-5 bg-[#7058E8] rounded-full flex items-center justify-center absolute top-1/2 right-0">
            <span className="text-xs text-white font-medium">
              {contact.unreadCount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
