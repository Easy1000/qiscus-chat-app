import Image from "next/image";

export default function RoomHeader({ room }) {
  return (
    <div className="flex items-center p-4 border-b-0">
      <Image
        src={room.image_url}
        alt="room picture"
        width={500}
        height={500}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold">{room.name}</h2>
      </div>
    </div>
  );
}
