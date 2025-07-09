export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">ASM Vitrine Projet</h3>
          <p className="text-gray-300 text-sm">
            Promouvoir l’excellence congolaise sur la scène internationale
          </p>
        </div>

        <div className="text-center text-sm text-gray-300">
          <p>📍 0, avenue Kwango, Immeuble le 1306, 5ᵉ niveau, Gombe, Kinshasa</p>
          <p>📧 asmvitrineprojet@gmail.com</p>
        </div>

        <div className="text-center md:text-right text-gray-400 text-sm">
          © 2025 ASM Vitrine Projet. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
