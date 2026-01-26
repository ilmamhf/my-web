const Navbar = () => {
  return (
    <div className="grid grid-cols-4 bg-[#262323]/90 px-28 py-7 items-center sticky top-0 z-50 border-b border-[#3B3B3B]">
      <div className="col-span-1">Ilmam</div>

      <ul className="flex col-span-3 justify-end gap-20">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Experiences</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
