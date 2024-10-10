import ChatBox from "@/components/ChatBox";
import MessageInput from "@/components/MessageInput";
import ParticipantsList from "@/components/ParticipantsList";
import RoomHeader from "@/components/RoomHeader";

export default async function Home() {
  const data = await fetch("https://bit.ly/chat_room_endpoint");
  const dataJson = await data.json();
  const chatData = dataJson.results[0];
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
            <ChatBox comments={chatData.comments} />

            {/* Input Box */}
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
}