"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Contact, Message } from "@/utils/types";
import { contacts, initialConversations } from "@/utils/data";
import { ContactItem } from "@/components/peer-review/ContactItem";
import { MessageBubble } from "@/components/peer-review/MessageBubble";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function PeerReview() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[1]);
  const [conversations, setConversations] =
    useState<Record<string, Message[]>>(initialConversations);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const currentMessages = conversations[selectedContact.id] || [];

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

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: `${selectedContact.id}-${Date.now()}`,
      senderId: "me",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
    };

    // Add message to the specific conversation
    setConversations((prev) => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), message],
    }));

    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen bg-white flex">
      {/* Contacts Sidebar */}
      <div className="w-80 flex flex-col p-5">
        {/* Search Header */}
        <div className="relative border border-[#8C8C8C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C8C8C] focus:border-transparent">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777F89] h-3 w-3" />
          <input
            type="text"
            placeholder="Search"
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

        {/* Message Input */}
        <div className="p-4 bg-[#E6E8EA] ">
          <div className="flex items-center justify-between gap-5">
            <div className="w-full flex items-start gap-1 relative bg-white text-[#001928] font-light text-sm px-3 py-2 rounded-full focus:ring-[#7058E8]">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message"
                rows={1}
                className="w-full resize-none focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
                style={{ minHeight: "20px", maxHeight: "120px" }}
              />
              <GrAttachment className="text-black text-xl cursor-pointer" />
            </div>
            <Button
              variant="ghost"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="p-3 bg-[#7058E8] text-white rounded-full hover:bg-[#7058E8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <IoSend className="text-lg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
