// app/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import homeImage from "@/public/home2.png"; // Image for the home section
import { Card } from "@/components/ui/card";
import Milestones from "@/components/Milestone";
import DocumentsSection from "@/components/Documents";
import ToolsAndTechnologiesSection from "@/components/Tools";
import TeamsSection from "@/components/Team";
import PublicationDetailSection from "@/components/Publication";
import ContactUs from "@/components/ContactUs";
import LiteratureReview from "@/components/LitReview";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("researchProblems"); // Set default active tab to "Research Problems"

  return (
    <div>
      {/* Home Section with Image */}
      <section id="home" className="relative w-full h-screen">
        <Image
          src={homeImage}
          alt="Home Section Image"
          layout="fill" // Full width and height
          objectFit="cover" // Ensures the image covers the entire section
          objectPosition="center" // Keeps the center of the image visible
          className="absolute top-0 left-0"
          priority // Helps with performance by preloading the image
        />
      </section>

      {/* Introduction Section with Light Purple Background */}
      <section
        id="introduction"
        className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12"
        style={{ backgroundImage: "url('/bg6.png')" }} // Specify the image path here
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Decoding Diabetes: At-home Risk Assessment
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl leading-relaxed">
          Decoding Diabetes is a user-friendly app designed to help you assess
          your risk of diabetes from the comfort of your home. By utilizing
          advanced machine learning and image processing, it analyzes key
          indicators such as neck circumference, foot ulcers, infected nails,
          and retinopathy images. With a simple and intuitive interface, the app
          enables early detection and awareness, promoting better healthcare
          outcomes.
        </p>
        <ul className="text-lg text-gray-700 mt-6 list-disc pl-10 leading-loose">
          <li>Easily assess diabetes risk from home.</li>
          <li>Analyze various health indicators for comprehensive results.</li>
          <li>
            Designed for users of all backgrounds with a simple interface.&quot;
          </li>

          <li>Promotes early detection and timely healthcare intervention.</li>
        </ul>
      </section>
      <section
        id="litreview"
        className="min-h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 mt-12" // Add margin-top for spacing
        style={{ backgroundImage: "url('/bg2.png')" }}
      >
        <LiteratureReview />
      </section>
      {/* Domain Section */}
      <section
        id="domain"
        className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12"
        style={{ backgroundImage: "url('/bg2.png')" }} // S
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Our Domain
        </h2>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              activeTab === "background"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveTab("background")}
          >
            Background
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "researchGap"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveTab("researchGap")}
          >
            Research Gap
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "researchObjectives"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveTab("researchObjectives")}
          >
            Research Objectives
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              activeTab === "researchProblems"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveTab("researchProblems")}
          >
            Research Problems
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "background" && (
          <Card className="w-3/4 max-w-4xl p-6 shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Background</h3>
            <p className="text-gray-700 mb-4">
              <strong>What is Decoding Diabetes?</strong> <br />
              Decoding Diabetes is an innovative web application designed to
              empower users with the ability to assess their risk of diabetes
              using advanced machine learning algorithms and image processing
              techniques. It provides a comprehensive platform for users to
              engage in proactive health management.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Why are we focusing on this topic?</strong> <br />
              Diabetes is a growing health concern worldwide, with many
              individuals lacking access to reliable diagnostic tools. By
              focusing on this topic, we aim to bridge the gap between
              technology and healthcare, making diabetes risk assessment
              accessible to everyone.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>What are the main problems we identified?</strong> <br />
              Our research has identified several key challenges in diabetes
              detection, including:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  The absence of user-friendly, home-based diagnostic tools.
                </li>
                <li>
                  The need for comprehensive screening that includes diverse
                  indicators.
                </li>
                <li>
                  The importance of timely intervention to prevent
                  complications.
                </li>
              </ul>
            </p>
          </Card>
        )}

        {activeTab === "researchGap" && (
          <Card className="w-3/4 max-w-4xl p-6 shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Research Gap</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Limited Home-Based Solutions:</strong> There is a
                notable absence of accessible home-based diabetes diagnostic
                tools that cater to the general user population. Most existing
                solutions require professional medical supervision, making it
                challenging for individuals to assess their risk independently.
              </li>
              <li>
                <strong>User-Friendly Gap:</strong> Current diabetes diagnostic
                tools often lack a user-friendly interface, hindering widespread
                adoption among diverse users. This results in many potential
                users feeling overwhelmed or confused, ultimately limiting the
                effectiveness of these tools in everyday settings.
              </li>
              <li>
                <strong>Lack of Diverse Indicators:</strong> Many conventional
                diabetes prediction methods overlook unconventional indicators
                that could provide valuable insights. For instance, factors like
                neck circumference images, foot ulcers, infected nails, and
                retinal images are often neglected, despite their relevance in
                assessing diabetes risk.
              </li>
              <li>
                <strong>Delayed Detection:</strong> The absence of early and
                comprehensive screening tools contributes to delayed diabetes
                detection. This limitation restricts individuals&apos;
                opportunities for proactive management and timely interventions,
                leading to more severe health complications.
              </li>
            </ul>
          </Card>
        )}

        {activeTab === "researchObjectives" && (
          <Card className="w-3/4 max-w-4xl p-6 shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Research Objectives</h3>
            <h4 className="font-medium">Main Objective:</h4>
            <p>
              To create &quot;Decoding Diabetes,&quot; an advanced web app
              utilizing machine learning and image processing for accurate
              home-based diabetes risk assessment. This objective focuses on
              empowering users to monitor their health proactively.
            </p>
            <h4 className="font-medium mt-2">Sub Objectives:</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Develop machine learning algorithms:</strong>
                Create models that analyze various health images, enhancing
                predictive accuracy related to diabetes risk.
              </li>
              <li>
                <strong>Integrate image processing techniques:</strong>
                Extract insights from user-uploaded images to identify
                unconventional indicators relevant to diabetes.
              </li>
              <li>
                <strong>Ensure a user-friendly interface:</strong>
                Design an intuitive interface for users of all backgrounds,
                promoting accessibility and engagement.
              </li>
              <li>
                <strong>Promote early awareness:</strong>
                Provide timely risk assessments to empower users in seeking
                professional help and making healthier choices.
              </li>
            </ul>
          </Card>
        )}
        {activeTab === "researchProblems" && (
          <Card className="w-3/4 max-w-4xl p-6 shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Research Problems</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Accessibility of Diabetes Diagnostic Tools:</strong>{" "}
                Many existing diabetes diagnostic tools are not readily
                accessible for home use, creating a barrier for individuals who
                wish to monitor their health independently.
              </li>
              <li>
                <strong>Integration of Unconventional Indicators:</strong>{" "}
                Current methodologies often overlook key indicators, such as
                neck circumference and retinal images, which can significantly
                enhance risk assessment.
              </li>
              <li>
                <strong>Complexity of Existing Tools:</strong> Many available
                tools are complex and not user-friendly, leading to user
                frustration and decreased effectiveness.
              </li>
              <li>
                <strong>Delayed Detection and Intervention:</strong> The lack of
                early detection tools can result in severe health consequences
                due to delayed intervention.
              </li>
            </ul>
          </Card>
        )}
      </section>

      {/* Milestones Section */}
      <Milestones />
      {/* Features Section */}
      <section
        id="features"
        className="flex flex-col items-center justify-center bg-purple-400 p-6 sm:p-12 w-screen"
        style={{ backgroundImage: "url('/bg7.png')" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Our Services Include
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
          <Card className="p-4 shadow-lg bg-white transition-transform transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Diabetes Detection with Home-Captured Neck Images
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Utilize images of neck circumference to assess diabetes risk.
            </p>
          </Card>
          <Card className="p-4 shadow-lg bg-white transition-transform transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Diabetic Prediction Using Foot Ulcer
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Analyze foot ulcer characteristics to predict diabetes risk.
            </p>
          </Card>
          <Card className="p-4 shadow-lg bg-white transition-transform transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Predicting Diabetes Through Nail Analysis
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Assess nail health to identify potential diabetes indicators.
            </p>
          </Card>
          <Card className="p-4 shadow-lg bg-white transition-transform transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Detect Signs of Retinopathy
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Analyze eye scans for retinopathy signs and stage prediction.
            </p>
          </Card>
        </div>
      </section>

      <DocumentsSection />
      <ToolsAndTechnologiesSection />
      <PublicationDetailSection />
      <TeamsSection />
      <section
        id="contact"
        className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12"
        style={{ backgroundImage: "url('/bg4.png')" }}
      >
         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <ContactUs />
      </section>
    </div>
  );
};

export default HomePage;
