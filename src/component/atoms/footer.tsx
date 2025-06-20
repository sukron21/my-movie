export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10 text-center text-sm">
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <div className="mt-4 space-x-4 text-gray-400">
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="mailto:rahmatfurqon0@gmail.com">Contact</a>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        © 2025 by Rahmat Furqon. All rights reserved.
      </p>
    </footer>
  );
};
