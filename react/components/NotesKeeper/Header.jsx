function Header() {
  return (
    <header className="flex flex-row w-full bg-amber-400 h-10 mb-3 p-3 items-center justify-between">
      <h1>Arrow</h1>
      <ul className="flex flex-row gap-4">
        <li>Function</li>
        <li>Fat arrow</li>
      </ul>
    </header>
  );
}

export default Header;
