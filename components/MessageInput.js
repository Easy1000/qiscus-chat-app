export default function MessageInput() {
  return (
    <form className="flex items-center p-4 border-t">
      <input
        type="text"
        placeholder="Type your message..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
