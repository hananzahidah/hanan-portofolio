import { MdArrowOutward } from "react-icons/md";

const Profile = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="flex justify-between items-center gap-10 p-20 h-">
        <div className="uppercase text-6xl font-bold w-1/2">
          The Projects I Have Worked
        </div>
        <div className="text-xl w-1/2 flex flex-col gap-5 h-full">
          <div>Would you like to have a look at the detail of them?</div>
          <div className="flex items-center text-2xl gap-4">
            <div className="">All Projects</div>
            <div className="rounded-full border border-white p-2">
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
