import { Hero } from "./components/Hero";
import { CardGameContainer } from "./components/CardGame";
import "./App.css";

import { Header } from "./components/NavBarPrincipal";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen flex-1 w-full bg-[#131217]">
      <Header />
      <section className="p-4 w-full justify-center flex flex-col ">
        <Hero />
        <CardGameContainer />
        <SomeThing />
      </section>
      <Footer />
    </div>
  );
}

export const SomeThing = () => {
  return (
    <div className="@container  ">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 max-w-[960px] mx-auto border-2 border-[#201d25] bg-[#201d25] rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-white text-center tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Join the PixelPlay Community
          </h1>
          <p className="text-white text-base font-normal leading-normal max-w-[720px]">
            Stay updated on our latest game releases, news, and events. Follow
            us on social media and be part of the PixelPlay community!
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#bfadea] text-[#131217] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
            <span className="truncate">Follow Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
