import getRole from "@/utils/getRole";

export default function ParticipantsList({ participants }) {
  return (
    <div className="p-4 border-b-0">
      <h3 className="text-lg font-semibold mb-2">Participants</h3>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id} className="flex items-center mb-1">
            <span className="text-sm">
              {participant.name} ({getRole(participant.role)})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
