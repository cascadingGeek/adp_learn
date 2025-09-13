"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Contact, Message, FileAttachment } from "@/utils/types";
import { contacts, initialConversations } from "@/utils/data";
import { ContactItem } from "@/components/peer-review/ContactItem";
import { MessageBubble } from "@/components/peer-review/MessageBubble";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { FiX, FiFile, FiImage } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function EnhancedPeerReview() {
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get initial contact from URL params
  const urlUserId = searchParams.get("user");
  const urlUserName = searchParams.get("name");

  const [selectedContact, setSelectedContact] = useState<Contact>(() => {
    if (urlUserId) {
      const contact = contacts.find((c) => c.id === urlUserId);
      return contact || contacts[1];
    }
    return contacts[1];
  });

  const [conversations, setConversations] =
    useState<Record<string, Message[]>>(initialConversations);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [attachments, setAttachments] = useState<FileAttachment[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const currentMessages = conversations[selectedContact.id] || [];

  // Update selected contact when URL params change
  useEffect(() => {
    if (urlUserId) {
      const contact = contacts.find((c) => c.id === urlUserId);
      if (contact) {
        setSelectedContact(contact);
      }
    }
  }, [urlUserId]);

  const getUpdatedContacts = () => {
    return contacts.map((contact) => {
      const contactMessages = conversations[contact.id];
      if (contactMessages && contactMessages.length > 0) {
        const lastMessage = contactMessages[contactMessages.length - 1];
        return {
          ...contact,
          lastMessage:
            lastMessage.content.length > 30
              ? lastMessage.content.substring(0, 30) + "..."
              : lastMessage.content,
          time: lastMessage.timestamp,
        };
      }
      return contact;
    });
  };

  const filteredContacts = getUpdatedContacts().filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsUploading(true);

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const attachment: FileAttachment = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          url: e.target?.result as string,
        };

        setAttachments((prev) => [...prev, attachment]);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAttachment = (attachmentId: string) => {
    setAttachments((prev) => prev.filter((att) => att.id !== attachmentId));
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() && attachments.length === 0) return;

    const message: Message = {
      id: `${selectedContact.id}-${Date.now()}`,
      senderId: "me",
      content: newMessage || (attachments.length > 0 ? "[Attachment]" : ""),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    setConversations((prev) => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), message],
    }));

    setNewMessage("");
    setAttachments([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <FiImage className="w-4 h-4" />;
    return <FiFile className="w-4 h-4" />;
  };

  return (
    <div className="h-screen bg-white flex">
      {/* Contacts Sidebar */}
      <div className="w-80 flex flex-col p-5">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Messages</h2>
          {urlUserName && (
            <p className="text-sm text-gray-600">
              Chatting with {decodeURIComponent(urlUserName)}
            </p>
          )}
        </div>

        {/* Search Header */}
        <div className="relative border border-[#8C8C8C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C8C8C] focus:border-transparent mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777F89] h-3 w-3" />
          <input
            type="text"
            placeholder="Search conversations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-7 pr-4 py-2 bg-transparent text-[#777F89] font-light border-0 outline-0 text-xs"
          />
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isActive={selectedContact.id === contact.id}
              onClick={() => setSelectedContact(contact)}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
              {selectedContact.avatar}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                {selectedContact.name}
              </h3>
              <p className="text-sm text-gray-500">
                {selectedContact.isOnline ? "Online" : "Last seen recently"}
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {currentMessages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <p className="text-lg mb-2">No messages yet</p>
                <p className="text-sm">
                  Start a conversation with {selectedContact.name}
                </p>
              </div>
            </div>
          ) : (
            currentMessages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))
          )}
        </div>

        {/* File Attachments Preview */}
        {attachments.length > 0 && (
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-2 max-w-xs"
                >
                  {getFileIcon(attachment.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {attachment.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(attachment.size)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeAttachment(attachment.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="p-4 bg-[#E6E8EA]">
          <div className="flex items-end gap-3">
            <div className="flex-1 flex items-end gap-2 relative bg-white text-[#001928] font-light text-sm px-3 py-2 rounded-full focus-within:ring-2 focus-within:ring-[#7058E8]">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message"
                rows={1}
                className="w-full resize-none focus:outline-none border-0"
                style={{ minHeight: "20px", maxHeight: "120px" }}
              />

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                multiple
                accept="image/*,.pdf,.doc,.docx,.txt"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
              >
                <GrAttachment className="text-lg" />
              </button>
            </div>

            <Button
              onClick={handleSendMessage}
              disabled={
                (!newMessage.trim() && attachments.length === 0) || isUploading
              }
              className="p-3 bg-[#7058E8] text-white rounded-full hover:bg-[#7058E8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <IoSend className="text-lg" />
            </Button>
          </div>

          {isUploading && (
            <div className="mt-2 text-xs text-gray-500">Uploading files...</div>
          )}
        </div>
      </div>
    </div>
  );
}
