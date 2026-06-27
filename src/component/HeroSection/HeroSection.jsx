export default function HeroSection() {
  return (
    <div>
      <main className="grid h-screen grid-cols-1 items-center justify-center">
        <section className="order-2 grid items-center justify-center">
          <h1>Muhammad Ramdani</h1>
        </section>
        <aside className="order-1 grid items-center justify-center">
          <img
            src="/GambarDiri.jpg"
            className="h-50 w-50 rounded-full"
            alt=""
          />
        </aside>
      </main>
    </div>
  );
}
