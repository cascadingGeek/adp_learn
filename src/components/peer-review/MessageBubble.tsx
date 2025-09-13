"use client";
import React, { FC } from "react";
import { Message } from "@/utils/types";
import { FiDownload, FiFile } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: FC<MessageBubbleProps> = ({ message }) => {
  const handleDownloadAttachment = (attachment: any) => {
    const link = document.createElement("a");
    link.href = attachment.url;
    link.download = attachment.name;
    link.click();
  };

  const isImage = (type: string) => type.startsWith("image/");

  return (
    <div
      className={`flex mb-4 ${message.isOwn ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          message.isOwn
            ? "bg-[#7058E8] text-white"
            : "bg-white text-gray-800 border border-gray-200"
        }`}
      >
        {message.content && (
          <p className="text-sm whitespace-pre-wrap break-words">
            {message.content}
          </p>
        )}

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-2 space-y-2">
            {message.attachments.map((attachment: any) => (
              <div key={attachment.id} className="space-y-2">
                {isImage(attachment.type) ? (
                  <div className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={attachment.url}
                      alt={attachment.name}
                      className="max-w-full h-auto rounded-lg cursor-pointer"
                      onClick={() => window.open(attachment.url, "_blank")}
                    />
                    <Button
                      onClick={() => handleDownloadAttachment(attachment)}
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1 h-auto"
                    >
                      <FiDownload className="w-3 h-3" />
                    </Button>
                  </div>
                ) : (
                  <div
                    className={`flex items-center space-x-2 p-2 rounded border ${
                      message.isOwn
                        ? "bg-white/10 border-white/20"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <FiFile className="w-4 h-4" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">
                        {attachment.name}
                      </p>
                      <p className="text-xs opacity-75">
                        {(attachment.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <Button
                      onClick={() => handleDownloadAttachment(attachment)}
                      size="sm"
                      variant="ghost"
                      className="p-1 h-auto"
                    >
                      <FiDownload className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <p
          className={`text-xs mt-1 ${
            message.isOwn ? "text-white/70" : "text-gray-500"
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};
