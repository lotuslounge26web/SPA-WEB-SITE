import { useState } from 'react';

export default function Home() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxurious%20spa%20treatment%20room%20on%2010th%20floor%20with%20floor-to-ceiling%20windows%20overlooking%20the%20Indian%20Ocean%20at%20golden%20sunset%20hour%2C%20warm%20ambient%20interior%20lighting%20with%20soft%20brown%20and%20beige%20tones%2C%20elegant%20massage%20bed%20with%20plush%20linens%2C%20minimalist%20modern%20furniture%2C%20tranquil%20atmosphere%2C%20premium%20hotel%20spa%20interior%20design%2C%20calm%20ocean%20waves%20visible%20through%20large%20windows%2C%20warm%20orange%20and%20golden%20sky%20reflection%2C%20sophisticated%20and%20serene%20ambiance%2C%20high-end%20wellness%20retreat%20aesthetic&width=1920&height=1080&seq=spa-hero-ocean-sunset-001&orientation=landscape"
          alt="Luxury spa treatment room with ocean view at sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <img
          src="https://static.readdy.ai/image/950ece443f523582842352d95e566920/2fa94515cbdf362f7f53ac36eae5a1a2.png"
          alt="Granbell Hotel Spa Logo"
          className="h-16 md:h-20 w-auto"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-3xl">
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-wide">
            COMING SOON
          </h1>
          
          <div className="space-y-4">
            <p className="font-montserrat text-lg md:text-xl lg:text-2xl text-white/95 font-light tracking-wide">
              Our official website is launching soon.
            </p>
            <p className="font-montserrat text-base md:text-lg lg:text-xl text-white/90 font-light">
              The <strong className="font-medium">spa</strong> is now open at <strong className="font-medium">Granbell Hotel</strong>.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px w-16 bg-white/40"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-white/60"></div>
            <div className="h-px w-16 bg-white/40"></div>
          </div>
        </div>
      </main>

      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <button
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="w-14 h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <i className="ri-whatsapp-line text-2xl text-white"></i>
        </button>

        {/* WhatsApp Tooltip */}
        {showWhatsApp && (
          <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-in">
            <button
              onClick={() => setShowWhatsApp(false)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-lg"></i>
            </button>
            <p className="font-montserrat text-sm text-gray-700 mb-3">
              Contact us for spa bookings and inquiries
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white text-center rounded-md font-montserrat text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Open WhatsApp
            </a>
          </div>
        )}
      </div>

      {/* Footer Link */}
      <footer className="absolute bottom-4 left-0 right-0 z-20">
        <div className="text-center">
          <a
            href="https://readdy.ai/?ref=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-xs text-white/60 hover:text-white/80 transition-colors duration-300 cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}
