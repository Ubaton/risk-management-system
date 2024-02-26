import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-4">
        <h1 className="text-2xl font-bold">Risk Owner Management</h1>
      </header>
      <main>{children}</main>
      <footer className="py-4 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Risk Owner Management
      </footer>
    </div>
  );
};

export default Layout;
