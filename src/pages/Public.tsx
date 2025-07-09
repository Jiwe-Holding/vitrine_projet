
import Layout from "../components/Layout";

export default function Public() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Notre public cible</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Entrepreneurs dynamiques</li>
        <li>Jeunes porteurs de projets</li>
        <li>Femmes leaders et innovatrices</li>
        <li>Institutions publiques et privées</li>
      </ul>
    </Layout>
  );
}
