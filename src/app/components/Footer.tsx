import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-black py-6 mt-10 border-t border-gray-300 shadow-lg">
      <div className="container mx-auto text-center ">
        <p className="text-lg font-semibold">Copyrights &copy; {new Date().getFullYear()} Fi Agency</p>
       
      </div>
    </footer>
  );
}
