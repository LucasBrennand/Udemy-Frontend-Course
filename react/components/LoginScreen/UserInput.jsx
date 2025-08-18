function UserInput({value, onChange}) {
  return (
    <input
      className="bg-white text-blue-500 p-1 w-full rounded-2xl focus:border-blue-400 active:border-b-cyan-500 focus:border-2"
      type="text"
      placeholder="User"
      value={value}
      onChange={onChange}
    />
  );
}

export default UserInput;
