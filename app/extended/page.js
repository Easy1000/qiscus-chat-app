import ChatBoxExt from "@/components/ChatBoxExt";
import MessageInput from "@/components/MessageInput";
import ParticipantsList from "@/components/ParticipantsList";
import RoomHeader from "@/components/RoomHeader";
import chatDataExt from "@/public/chatDataExt.json";

export default function Extended() {
  const chatData = chatDataExt.results[0];
  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="bg-white shadow-md rounded-lg ">
        {/* Room Header */}
        <RoomHeader room={chatData.room} />

        <div className="flex flex-col md:flex-row h-full">
          {/* Participants */}
          <ParticipantsList participants={chatData.room.participant} />

          <div className="flex flex-col grow">
            {/* Chat Box */}
            <ChatBoxExt comments={chatData.comments} />

            {/* Input Box */}
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
}
