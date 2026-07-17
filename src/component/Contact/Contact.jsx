export default function Contact() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl justify-center px-5 pt-16">
        <h1 className="border-b-2 border-blue-500 pb-3 text-center text-4xl font-bold">
          Contact
        </h1>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12">
        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Mari Terhubung 👋
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Terima kasih telah mengunjungi portfolio saya. Apabila Anda memiliki
            pertanyaan, ingin berdiskusi, atau tertarik bekerja sama, silakan
            hubungi saya melalui kontak berikut.
          </p>
          <nav className="mt-8 space-y-4">
            <a
              href="mailto:muhamadramdani121.mr60@gmail.com"
              className="flex items-center justify-between rounded-xl border p-4 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <span>📧 Email</span>
              <span className="text-blue-600">
                muhamadramdani121.mr60@gmail.com →
              </span>
            </a>

            <a
              href="https://github.com/MuhammadRamdani121/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border p-4 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <span>💻 GitHub</span>
              <span className="text-blue-600">
                github.com/MuhamadRamdani121 →
              </span>
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border p-4 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <span>💼 LinkedIn</span>
              <span className="text-blue-600">linkedin.com/in/username →</span>
            </a>

            <a
              href="https://wa.me/62895805102578"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border p-4 transition hover:border-green-500 hover:bg-green-50"
            >
              <span>📱 WhatsApp</span>
              <span className="text-green-600">Chat Saya→</span>
            </a>
          </nav>
        </section>
      </main>
    </>
  );
}
