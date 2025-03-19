export function EmailInput() {
  return (
    <div className="w-full flex relative group">
      <label
        htmlFor="email"
        className="absolute top-3 left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm cursor-pointer"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer"
      />
    </div>
  );
}
