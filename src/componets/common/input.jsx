
export default function Input({ search, onSearchChange }) {
    return (
        <input
            type="text"
            value={search}
            onChange={onSearchChange}
            placeholder="🔍 Search Pages..."
            className="w-80 px-4 py-3 bg-white border border-gray-300 rounded-lg
            text-sm text-gray-700 placeholder-gray-400
            outline-none focus:ring-2 focus:ring-orange-400
            focus:border-orange-400 shadow-sm transition"
        />
    );
}
