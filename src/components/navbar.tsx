const Navbar = () => {
  return (
    <div className=" fixed w-full z-50">
      <div className="w-full flex items-center justify-between p-5">
        <div className="uppercase px-5 py-2 bg-black text-white rounded-full">
          Available For Work
        </div>
        <div className="text-2xl font-light">Hanan Zahidah</div>
        <div className="flex items-center justify-center gap-5">
          <div className="uppercase px-5 py-2 bg-gray-300 rounded-full">
            About Me
          </div>
          <div className="uppercase px-5 py-2 bg-gray-300 rounded-full">
            Project
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
