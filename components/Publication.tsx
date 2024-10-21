import { Card } from "@/components/ui/card"; // Adjust the import path based on your project structure
import { SlBadge } from "react-icons/sl";

const PublicationDetailSection = () => {
  return (
    <section
      id="publications"
      className="py-16 bg-gray-100"
      style={{ backgroundImage: "url('/bg7.png')" }}
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2 text-center">
          Publication Details for Individual Research Paper -
          IT21102646_Venuganth Arunthavarajah
        </h3>
        <Card className="p-6 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2 text-center">ICAC 2024</h3>
          <SlBadge className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-lg text-center">
            For the Paper titled{" "}
            <strong>
              &quot;Decoding Diabetics: Diabetic Retinopathy Detection using
              Machine Learning&quot;
            </strong>
          </p>

          <p className="text-lg text-center mt-4">
            Presented at the sixth consecutive International Conference on
            Advancements in Computing (ICAC) 2024, held on 12th - 13th December
            2024
          </p>
          <p className="text-lg text-center mt-2">Colombo, Sri Lanka</p>
        </Card>
      </div>
    </section>
  );
};

export default PublicationDetailSection;
