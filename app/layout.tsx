// app/layout.tsx
import React from "react";
import Header from "@/components/Header"; // Adjust the import path as needed
import "./globals.css"; // Import your global styles if you have any

// Define the Root Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en"> {/* Add the <html> tag with language attribute */}
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
