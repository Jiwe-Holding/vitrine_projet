
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">ASM Vitrine Projet</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">À propos</Link>
          <Link to="/realisations" className="text-gray-600 hover:text-blue-600">Réalisations</Link>
          <Link to="/public" className="text-gray-600 hover:text-blue-600">Public cible</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
