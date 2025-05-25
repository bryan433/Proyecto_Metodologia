export const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          {/* Links de texto */}
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a
              className="text-[#a7a1b5] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[#a7a1b5] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-[#a7a1b5] text-base font-normal leading-normal min-w-40"
              href="#"
            >
              Contact Us
            </a>
          </div>

          {/* Íconos de redes sociales */}
          <div className="flex flex-wrap justify-center gap-4 text-[#a7a1b5]">
            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57..." />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05..." />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128..." />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#a7a1b5] text-base font-normal leading-normal">
            © 2025 Team ICC. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
};
