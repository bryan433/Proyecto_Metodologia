export const Hero = () => {
  return (
    <article className="w-full flex justify-center my-10">
      <div className="max-w-[960px] w-full px-4">
        <Hero2 />
      </div>
    </article>
  );
};

export const Hero2 = () => {
  return (
    <div className="relative bg-red-400 min-h-[480px] flex items-center justify-center overflow-hidden rounded-xl box-shadow-md shadow-gray-100 shadow-sm">
      <img
        src="/bryan.png"
        alt="Fondo PixelPlay"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10"></div>

      <div className="relative z-20 text-center text-white p-4 flex flex-col gap-4">
        <h1 className="text-4xl font-black">Welcome to Team ICC</h1>
        <h2 className="text-sm font-normal">
          Immerse yourself in the world of Team ICC, where Computer Engineering...
        </h2>
        <a href="#games" className="capitalize hover:bg-gray-200 cursor-pointer transition rounded-full bg-[#bfadea] text-[#131217] px-5 py-2 font-bold cursor">
          discover our games
        </a>
      </div>
    </div>
  );
};
