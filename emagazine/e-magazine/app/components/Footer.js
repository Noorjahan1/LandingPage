// app/components/Footer.js
export default function Footer({ magazineName, poweredBy }) {
  return (
    <footer className="mt-16 py-10 text-center border-t-2 border-blue-100">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} {magazineName}. All Rights Reserved.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        {poweredBy}
      </p>
    </footer>
  );
}
