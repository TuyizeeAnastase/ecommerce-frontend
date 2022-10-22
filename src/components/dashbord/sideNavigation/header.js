export const SidenavHeader = () => {
  return (
    <div className="flex  items-center mb-6 sticky top-2 z-10">
      <div className="flex items-center  ml-5 p-1 relative sm:mr-0 sm:right-auto">
           <div>
           <p className="text-l text-gray-900 p-4">Manzi David</p>
            <button className="bg-gray-900 ml-4 text-white block px-4 py-2 rounded-lg text-base font-medium">Admin</button>
           </div>
            <a href="/#" className="block relative">
              <img
                alt="Enoch Ndika"
                src="https://res.cloudinary.com/depljf8uc/image/upload/v1664959769/cld-sample.jpg"
                className="h-10 mx-auto object-cover rounded-full w-10"
              />
            </a>
          </div>
    </div>
  );
};
