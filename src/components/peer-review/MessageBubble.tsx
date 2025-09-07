"use client";
import { Message } from "@/utils/types";

export const MessageBubble = ({ message }: { message: Message }) => {
  return (
    <div
      className={`flex ${message.isOwn ? "justify-end" : "justify-start"} mb-8`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl relative ${
          message.isOwn
            ? "bg-[#7B61FF] text-white rounded-br-md"
            : "bg-gray-100 text-[#001928] rounded-bl-md"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p className="text-xs mt-1 text-[#8A959C] absolute -bottom-5 left-0">
          {message.timestamp}
        </p>
      </div>{" "}
    </div>
  );
};
