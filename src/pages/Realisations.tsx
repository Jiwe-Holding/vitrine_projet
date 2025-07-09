
import Layout from "../components/Layout";

export default function Realisations() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nos réalisations</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Participation réussie au Salon International de l’Agriculture (SIA).</li>
        <li>72ᵉ édition du Salon de l’industrie minérale à Bordeaux.</li>
        <li>Accompagnement du Ministère des Mines, CTC et autres institutions.</li>
        <li>Adaptation des stratégies de présentation pour le marché nord-américain.</li>
      </ul>
      <img src="/assets/WhatsApp Image 2025-05-19 at 19.48.38_7ac3f02a.jpg" alt="Réalisations" className="mt-6 rounded shadow-md"/>
    </Layout>
  );
}
