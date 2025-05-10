export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <main className="flex-1 flex items-center justify-center">{children}</main>
      <footer className="bg-gray-800 text-white py-2 text-center">
        <p className="text-sm">© 2023 UConnect. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
