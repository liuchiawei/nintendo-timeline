export default function Footer({ name }: { name: string }) {
  return (
    <footer className="text-center bg-gradient-to-b from-accent to-rose-600 text-white py-12">
      © {new Date().getFullYear()} {name} <br /> All rights reserved
    </footer>
  );
}
