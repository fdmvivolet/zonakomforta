export default function About() {
  return (
    <main className="pt-16 pb-32 overflow-x-hidden">
      {/* Hero Section: Наша история */}
      <section className="flex flex-col gap-sm p-margin-mobile pt-lg">
        <h2 className="font-headline-sm-mobile text-headline-sm-mobile text-primary border-l-4 border-secondary pl-3">
          Наша история
        </h2>
        <div className="rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(61,43,31,0.1)]">
          <img 
            alt="Наша кофейня" 
            className="w-full h-64 object-cover" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uj5M_9H15OIWdaKuQNFIwYa5v-9EGWA8JAwsJUAyn94sRsvVVaOGgbFe5envYUr1q8D65Xk4W7Ubd0K-QzHtkSyE43eGI64nyneIvS2rfX1ajPphlzOOohl3_ZUvsQN5_xBWa3cSHD3If-xiGxMKbCIGo7Qe_fRgoKcFaZT645Atjy8p_ultb-LMbfMXC-iMm-lzBv5ViuYKHkLK6waCBCI_6dfIEY_GsvsfJvUqBKU22TANA38j7t8Gg"
          />
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm">
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Зона Комфорта родилась из любви к идеальной чашке кофе и стремления создать место, где время замедляется. Мы верим, что кофе — это не просто напиток, а ритуал, объединяющий людей. Наше пространство спроектировано так, чтобы каждый гость почувствовал себя в своей тарелке, окруженным теплом и вниманием к деталям.
          </p>
          <p className="font-body-md text-on-surface-variant leading-relaxed mt-4">
            Мы тщательно отбираем зерна у лучших фермеров мира и обжариваем их с особой точностью, чтобы раскрыть уникальный вкусовой профиль каждого сорта.
          </p>
        </div>
      </section>

      {/* Gallery: Атмосфера вдохновения */}
      <section className="p-margin-mobile bg-surface-container-low py-lg">
        <h2 className="font-headline-sm-mobile text-headline-sm-mobile text-primary mb-md">Атмосфера вдохновения</h2>
        <div className="grid grid-cols-1 gap-md">
          <div className="relative group rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
            <img 
              alt="Напиток" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuqqCBWdtV-hH-KGcg-D1fEj6Nf9EZrmY59FSppEekzqG87pA-lEkDhZgXsyrZf9KmaKc-9h4dxwwSTvjWuttT4VJhXl4cYanCVcqQJiJ4IxUNsAW2SS0BAP5Z-sHo1nQ9WcdImKuULC8xO4NfROo3xvDri9JOfiM4RRnfY8vQWA7bCjX30duNcPJ-E8Q9XUdfPL2y5dlnM26vQjIpZqLrjGMgosALZofuXA-f41IfGnbVSAE5obL42zSwSm5En4_d9sVf8tHZRQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-white font-label-md">Свежая обжарка</span>
          </div>
          <div className="grid grid-cols-2 gap-md">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[2/3]">
              <img 
                alt="Выпечка" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB34m2Eru-6nnVRv7inBF2KVaiienNuzG_MvCcxO7izIZ5GQLKi9LZCnxN4U2zain4AwMJsxPJW9Q6ec32jSzhRckN4BEKMnHGiTdj_mqh0X4N7hHyPmiUx2kapTIDS2fIAQPHnRQmYxRRnVldENZ3jfk3TTwPVup8TWyCQlm_Xp81DE_B_cSjPXv8dcLXqbFjTBNuleEjhCatw6BakHcAb3wjjQIJKWYY6Y7-mnJrF4CQsg_gMbUFNi5XspjhUrv6WhEirQw1XXg"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[2/3]">
              <img 
                alt="Процесс" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTcN-BZ3lio1elDox2Y_lFnNpCaeM1HqkJBmcG8vGQsccPd2bP7bH2KekUjMoPHtJ6xy9DKppg0sixs4rLATIOHr6T9PgGEFdkFMONQ57_3e5MNLIb-JzP_4i66MPIYIrFNxpnIGUcbSogTEeZmlaVe8Fb6WG2qXLARGUGXfZnId977_qqSetH-OEW2RLFnUeVEVodH_Nc6H8ViNHKqjarU-Sf2GEYagFRFP3SUluM_nMRcDf5pv08Kmibk00Ss8n17V9rvI1mHQ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-margin-mobile py-lg">
        <h2 className="font-headline-sm-mobile text-headline-sm-mobile text-primary mb-md">Свяжитесь с нами</h2>
        <div className="flex flex-col gap-md">
          {/* Address Card */}
          <div className="bg-surface-container-highest p-md rounded-xl shadow-sm">
            <div className="flex flex-col gap-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">location_on</span>
                <div>
                  <p className="font-label-md text-primary uppercase tracking-wider">Адрес</p>
                  <p className="font-body-md text-on-surface-variant">ул. Ароматная, 15, Москва</p>
                </div>
              </div>
              <div className="h-px bg-outline-variant w-full my-2"></div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">schedule</span>
                <div>
                  <p className="font-label-md text-primary uppercase tracking-wider">Часы работы</p>
                  <p className="font-body-md text-on-surface-variant">Пн-Пт: 08:00 – 22:00</p>
                  <p className="font-body-md text-on-surface-variant">Сб-Вс: 09:00 – 23:00</p>
                </div>
              </div>
              <div className="h-px bg-outline-variant w-full my-2"></div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">call</span>
                <div>
                  <p className="font-label-md text-primary uppercase tracking-wider">Контакты</p>
                  <p className="font-body-md text-on-surface-variant">+7 (495) 123-45-67</p>
                  <p className="font-body-md text-on-surface-variant">hello@zonakomforta.ru</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="w-full h-48 bg-surface-container-high rounded-xl overflow-hidden relative flex items-center justify-center border border-outline-variant/30">
            <div className="absolute inset-0 bg-neutral-200" data-location="Moscow">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3d2b1f_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            <div className="z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-2">push_pin</span>
              <span className="font-label-md text-primary">Открыть в картах</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-margin-mobile pt-lg text-center bg-surface">
        <p className="font-label-sm text-on-surface-variant opacity-40">© 2024 Зона Комфорта</p>
      </footer>
    </main>
  );
}
