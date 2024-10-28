import { Card } from "@/components/ui/card"; // Adjust the import path based on your project structure
import {
  AiOutlineFilePdf,
  AiOutlineDownload,
  AiOutlineFilePpt,
  AiOutlineFileWord,
} from "react-icons/ai"; // Importing PDF, Download, and PowerPoint icons from React Icons
import { FaGraduationCap } from "react-icons/fa";

const DocumentSection = () => {
  const documents = {
    projectProposal: [
      {
        name: "IT21102646_Project Proposal",
        url: "/documents/Project Proposal Documents/R24-120_IT21102646_Venuganth A_Proposal Report.pdf",
      },
      {
        name: "IT21069772_Project Proposal",
        url: "/documents/Project Proposal Documents/R24_IT21069772_Sangavi.G.pdf",
      },
      {
        name: "IT21085062_Project Proposal",
        url: "/documents/Project Proposal Documents/R24_IT21085062_Kajanan.T.pdf",
      },
      {
        name: "IT21083228_Project Proposal",
        url: "/documents/Project Proposal Documents/R24-120_IT21083228_Methiny.S.pdf",
      },
    ],
    proposalPresentation: {
      name: "Proposal Presentation",
      url: "/documents/PPP/PP1My_Team.pptx",
    },
    statusDocument01: [
      {
        name: "IT21102646_Status Document 01",
        url: "/documents/Status Document 01/Status_documentation_01_IT21102646.pdf",
      },
      {
        name: "IT21069772_Status Document 01",
        url: "/documents/Status Document 01/Status_documentation_01_IT21069772-.pdf",
      },
      {
        name: "IT21085062_Status Document 01",
        url: "/documents/Status Document 01/Status_documentation_01_IT21085062.pdf",
      },
      {
        name: "IT21083228_Status Document 01",
        url: "/documents/Status Document 01/Status_documentation_01_IT21083228.pdf",
      },
    ],
    progressPresentation01: {
      name: "Progress Presentation 01",
      url: "/documents/pptx/pp1.pptx",
    },
    researchPaper: {
      name: "Group Research Paper",
      url: "/documents/Research Papers/Research_paper.pdf",
    },

    researchPaperIndividual: {
      name: "IT21102646_Research Paper",
      url: "/documents/Research Papers/Individual_Research_Paper Venuganth A_IT21102646.pdf",
    },

    progressPresentation02: {
      name: "Progress Presentation 02",
      url: "/documents/pptx/pp1.pptx",
    },
    statusDocument02: [
      {
        name: "IT21102646_Status Document 02",
        url: "/documents/Status Document 02/Status_documentation_02_IT21102646.pdf",
      },
      {
        name: "IT21069772_Status Document 02",
        url: "/documents/Status Documents/IT21102646_Status Document 02 - Part 2.pdf",
      },
      {
        name: "IT21085062_Status Document 02",
        url: "/documents/Status Documents/IT21102646_Status Document 02 - Part 3.pdf",
      },
      {
        name: "IT21083228_Status Document 02",
        url: "/documents/Status Documents/IT21102646_Status Document 02 - Part 4.pdf",
      },
    ],
    finalReportGroup: {
      name: "Final Report - Group",
      url: "/documents/Final/Venu.docx",
    },
    finalReportIndividual: [
      {
        name: "IT21102646_Final Report - Individual",
        url: "/documents/Final/Venu.docx",
      },
      {
        name: "IT21069772_Final Report - Individual",
        url: "/documents/Final/IT21069772.docx",
      },
      {
        name: "IT21085062_Final Report - Individual",
        url: "/documents/Final/IT21085062.docx",
      },
      {
        name: "IT21083228_Final Report - Individual",
        url: "/documents/Final/IT21083228.docx",
      },
    ],
    finalPresentation: {
      name: "Final Presentation",
      url: "/documents/Final Presentations/IT21102646_Final Presentation.pptx",
    },
    logbook: [
      { name: "IT21102646_Logbook", url: "/documents/Logbook/Logbook1.pdf" },
      { name: "IT21069772_Logbook", url: "/documents/Logbook/Logbook2.pdf" },
      { name: "IT21085062_Logbook", url: "/documents/Logbook/Logbook3.pdf" },
      { name: "IT21083228_Logbook", url: "/documents/Logbook/Logbook4.pdf" },
    ],
    projectRegistrationDocuments: [
      {
        name: "Topic Assessment Form",
        url: "/documents/Registration Documents/Venu TAF.pdf",
      },
      {
        name: "Project Charter Document",
        url: "/documents/Registration/RegistrationDocument2.pdf",
      },
    ],
  };

  return (
    <section
      id="documents"
      className="bg-purple-300 w-screen py-16 relative z-0"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className="my-8">
        {/* Project Proposal Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto">
          Project Proposal
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {documents.projectProposal.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center">
              <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
                <AiOutlineFilePdf className="w-12 h-12 mb-2 text-red-500" />{" "}
                {/* PDF Icon */}
                <a
                  href={doc.url}
                  download
                  className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                  {/* Download Icon */}
                  Download
                </a>
              </Card>
              <h4 className="text-md font-medium mt-2 text-center">
                {doc.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Proposal Presentation Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Proposal Presentation
        </h3>
        <div className="flex flex-col items-center">
          <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
            <AiOutlineFilePpt className="w-12 h-12 mb-2 text-green-500" />{" "}
            {/* PowerPoint Icon */}
            <a
              href={documents.proposalPresentation.url}
              download
              className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
              {/* Download Icon */}
              Download
            </a>
          </Card>
          <h4 className="text-md font-medium mt-2 text-center">
            {documents.proposalPresentation.name}
          </h4>
        </div>

        {/* Status Document 01 Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Status Document 01
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {documents.statusDocument01.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center">
              <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
                <AiOutlineFilePdf className="w-12 h-12 mb-2 text-red-500" />{" "}
                {/* PDF Icon */}
                <a
                  href={doc.url}
                  download
                  className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                  {/* Download Icon */}
                  Download
                </a>
              </Card>
              <h4 className="text-md font-medium mt-2 text-center">
                {doc.name}
              </h4>
            </div>
          ))}
        </div>
        {/* Progress Presentation 01 Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Progress Presentation 01
        </h3>
        <div className="flex flex-col items-center">
          <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
            <AiOutlineFilePpt className="w-12 h-12 mb-2 text-green-500" />{" "}
            {/* PowerPoint Icon */}
            <a
              href={documents.progressPresentation01.url}
              download
              className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
              {/* Download Icon */}
              Download
            </a>
          </Card>
          <h4 className="text-md font-medium mt-2 text-center">
            {documents.progressPresentation01.name}
          </h4>
        </div>
        {/* Research Paper Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Research Paper - Group
        </h3>
        <div className="flex justify-center space-x-4">
          {" "}
          {/* Centering cards */}
          <div className="flex flex-col items-center">
            <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
              <FaGraduationCap className="w-12 h-12 mb-2 text-blue-500" />
              <a
                href={documents.researchPaper.url}
                download
                className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
              >
                <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                {/* Download Icon */}
                Download
              </a>
            </Card>
            <h4 className="text-md font-medium mt-2 text-center">
              {documents.researchPaper.name}
            </h4>
          </div>
        </div>
        {/* Research Paper Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Research Paper - Individual
        </h3>
        <div className="flex justify-center space-x-4">
          {" "}
          {/* Centering cards */}
          <div className="flex flex-col items-center">
            <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
              <FaGraduationCap className="w-12 h-12 mb-2 text-blue-500" />
              <a
                href={documents.researchPaperIndividual.url}
                download
                className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
              >
                <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                {/* Download Icon */}
                Download
              </a>
            </Card>
            <h4 className="text-md font-medium mt-2 text-center">
              {documents.researchPaperIndividual.name}
            </h4>
          </div>
        </div>
        {/* Progress Presentation 02 Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Progress Presentation 02
        </h3>
        <div className="flex flex-col items-center">
          <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
            <AiOutlineFilePpt className="w-12 h-12 mb-2 text-green-500" />{" "}
            {/* PowerPoint Icon */}
            <a
              href={documents.progressPresentation02.url}
              download
              className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
              {/* Download Icon */}
              Download
            </a>
          </Card>
          <h4 className="text-md font-medium mt-2 text-center">
            {documents.progressPresentation02.name}
          </h4>
        </div>
        {/* Status Document 02 Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Status Document 02
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {documents.statusDocument02.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center">
              <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
                <AiOutlineFilePdf className="w-12 h-12 mb-2 text-red-500" />{" "}
                {/* PDF Icon */}
                <a
                  href={doc.url}
                  download
                  className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                  {/* Download Icon */}
                  Download
                </a>
              </Card>
              <h4 className="text-md font-medium mt-2 text-center">
                {doc.name}
              </h4>
            </div>
          ))}
        </div>
        {/* Final Report - Group Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Final Report - Group
        </h3>
        <div className="flex flex-col items-center">
          <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
            <AiOutlineFileWord className="w-12 h-12 mb-2 text-blue-500" />{" "}
            {/* Word Document Icon */}
            <a
              href={documents.finalReportGroup.url}
              download
              className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
              {/* Download Icon */}
              Download
            </a>
          </Card>
          <h4 className="text-md font-medium mt-2 text-center">
            {documents.finalReportGroup.name}
          </h4>
        </div>

        {/* Final Report - Individual Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Final Report - Individual
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {documents.finalReportIndividual.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center">
              <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
                <AiOutlineFileWord className="w-12 h-12 mb-2 text-blue-500" />{" "}
                {/* Word Document Icon */}
                <a
                  href={doc.url}
                  download
                  className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                  {/* Download Icon */}
                  Download
                </a>
              </Card>
              <h4 className="text-md font-medium mt-2 text-center">
                {doc.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Final Presentation Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Final Presentation
        </h3>
        <div className="flex flex-col items-center">
          <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
            <AiOutlineFilePpt className="w-12 h-12 mb-2 text-green-500" />{" "}
            {/* PowerPoint Icon */}
            <a
              href={documents.finalPresentation.url}
              download
              className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
            >
              <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
              {/* Download Icon */}
              Download
            </a>
          </Card>
          <h4 className="text-md font-medium mt-2 text-center">
            {documents.finalPresentation.name}
          </h4>
        </div>
        {/* Logbook Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Logbook
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {documents.logbook.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center">
              <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
                <AiOutlineFilePdf className="w-12 h-12 mb-2 text-red-500" />{" "}
                {/* PDF Icon */}
                <a
                  href={doc.url}
                  download
                  className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                  {/* Download Icon */}
                  Download
                </a>
              </Card>
              <h4 className="text-md font-medium mt-2 text-center">
                {doc.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Project Registration Documents Section */}
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gray-200 p-4 w-3/4 mx-auto mt-8">
          Project Registration Documents
        </h3>
        <div className="flex justify-center space-x-4">
          {documents.projectRegistrationDocuments.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center">
              <Card className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow h-48 w-64 flex flex-col items-center justify-center">
                <AiOutlineFilePdf className="w-12 h-12 mb-2 text-red-500" />{" "}
                {/* PDF Icon */}
                <a
                  href={doc.url}
                  download
                  className="bg-white border border-blue-500 text-blue-500 flex items-center justify-center py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  <AiOutlineDownload className="w-4 h-4 mr-2" />{" "}
                  {/* Download Icon */}
                  Download
                </a>
              </Card>
              <h4 className="text-md font-medium mt-2 text-center">
                {doc.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
