import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Adjust the path according to your project structure

const LiteratureReview = () => {
  return (
    <Card className="max-w-5xl mx-auto mt-12 p-4 sm:p-6">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl font-bold">Literature Review: Diabetes Risk Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm sm:text-base">
          Diabetes is a growing global health issue, and early risk assessment is crucial for effective management. Traditional methods are often inaccessible, leading to a need for innovative solutions. The &quot;Decoding Diabetes&quot; app leverages machine learning and image processing for at-home risk assessments.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Neck Circumference</h2>
        <p className="mb-4 text-sm sm:text-base">
          Increased neck circumference is linked to diabetes risk and metabolic issues. The app uses ML to analyze this measure for risk prediction (Joshi et al., 2022).
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. Foot Ulcers</h2>
        <p className="mb-4 text-sm sm:text-base">
          Diabetic foot ulcers can lead to severe complications. Image processing helps in early detection and monitoring, which the app integrates for proactive management (Yap et al., 2021).
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Nail Health</h2>
        <p className="mb-4 text-sm sm:text-base">
          Nail infections are common in diabetics and indicate poor control. The app analyzes nail images for early signs of infection, utilizing ML for accuracy (Balaban et al., 2020).
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. Diabetic Retinopathy</h2>
        <p className="mb-4 text-sm sm:text-base">
          Early screening for retinopathy is essential. The app incorporates ML algorithms to analyze retinal images for detection (Ting et al., 2019).
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Machine Learning's Role</h2>
        <p className="mb-4 text-sm sm:text-base">
          ML enhances predictive healthcare by identifying risk factors and providing personalized feedback (Rajkomar et al., 2018). The app combines various indicators for a comprehensive risk assessment.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">6. User Accessibility</h2>
        <p className="mb-4 text-sm sm:text-base">
          The app is designed for ease of use, enabling users to perform assessments without technical expertise. This approach promotes better health outcomes through continuous monitoring (Leijdekkers et al., 2020).
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">References</h1>
        <ul className="list-disc pl-6 text-sm sm:text-base">
          <li>Joshi, R., et al. (2022). &quot;Neck Circumference and Diabetes Risk.&quot; <em>Diabetes Research and Clinical Practice</em>.</li>
          <li>Yap, M. H., et al. (2021). &quot;Detection of Diabetic Foot Ulcers Using ML.&quot; <em>IEEE Transactions on Biomedical Engineering</em>.</li>
          <li>Balaban, M., et al. (2020). &quot;Nail Infections in Diabetic Patients.&quot; <em>Journal of Medical Imaging and Health Informatics</em>.</li>
          <li>Ting, D. S., et al. (2019). &quot;Deep Learning in Ophthalmology.&quot; <em>Progress in Retinal and Eye Research</em>.</li>
          <li>Rajkomar, A., et al. (2018). &quot;Machine Learning in Medicine.&quot; <em>New England Journal of Medicine</em>.</li>
          <li>Leijdekkers, P., et al. (2020). &quot;Usability of Mobile Health Technology.&quot; <em>Journal of Medical Internet Research</em>.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default LiteratureReview;
