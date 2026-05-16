export default function Menu() {
  return (
    <main className="pt-16 pb-32 px-margin-mobile md:px-margin-desktop max-w-screen-xl mx-auto">
      {/* Seasonal Offer Section */}
      <section className="mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-secondary-fixed rounded-full"></div>
          <h2 className="font-headline-sm text-headline-sm-mobile text-primary">Сезонное предложение</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ProductCard 
            title="Осенний пряный раф"
            desc="Теплые специи, тыквенный сироп и наше фирменное молоко"
            price="380 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDwawV0zwl9_9nWCaxrYbL0KZdM2JVQR1hjUaRxjgq5UN53K4KNesCvSP2Rl5Le7L1ezHiKnehtraQSy1rDLJ-SSfl0i2UYZwyGX9bRhGbDz-foCr_lSOQLE3BMTB_ZhQpt9IgH_p6Ykc_Gys6wYqp0Xu2o5q_i_G72cs0lVTzaIIzkcLAhylfpVXtQKFEsUrEraYBcK7fqud6qNnGQ6IeiF5sj2myPn1V6c6f7UznC5aV8W5SEyGs9BlmC-MYV1PhYGOy_8BmZCQ"
            tags={['Сезонное']}
          />
          <ProductCard 
            title="Кленовый Латте"
            desc="Нежный вкус кленового сиропа и жареного фундука"
            price="420 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqo1XowmNxu_T2yspE5Us8OVo0eeSw2cwpnwBzTc01WbAtRHc7Y4govx_HQMn7T5ZNT_O--nH0Wu3-RZ4Q049E9li454b9XT3bz6GwgrO2_Z6FJHPEkn_p7VWS7E1274PXXK5BIJllhtSIMqXjsJfrHGqI0gSvGkAf7mYo2ocZDBQNw8X7zBS2WeHZUR9ich5e0hxHgBSQ2-3yqBll45IaWGBC-DvLawU5Rz1n1vrcogXgN6RZp2A1xVU4Ht6-iT1qqJbcucWwg"
            tags={['Сезонное']}
          />
        </div>
      </section>

      {/* Signature Drinks Section */}
      <section className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-secondary rounded-full"></div>
          <h2 className="font-headline-sm text-headline-sm-mobile text-primary">Авторские напитки</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ProductCard 
            title="Матча Мадслайд"
            desc="Матча, какао, нежное молоко"
            price="450 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDB5kLT7cVpVQnRgMrIupyhMYLrtoi8dwGEitYrwRlHlO2vgv8EIOUQpyRr1VP85g5c8cHDbY-jHxgtKD5CyIP6mGWIAjclyxQ5eKTZvrL6bmb2nYHonHsRxSwpfLKOuddN-XLQzIBYQGXqcFRMG8Gxzr7_H4gf8A3xI4zK4fPSH0gws2k1RB_87AIiOoqwnKkx_KIUN82TYLRlk8BIwe674PJQGGP52xCTa8vYnsuxqetFABrg7MaIoU-kW41I56J3PqkY4UIWAg"
            tags={['Новинка', 'Авторское']}
          />
          <ProductCard 
            title="Ягодный Бриз"
            desc="Кофе с лесными ягодами"
            price="480 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqo1XowmNxu_T2yspE5Us8OVo0eeSw2cwpnwBzTc01WbAtRHc7Y4govx_HQMn7T5ZNT_O--nH0Wu3-RZ4Q049E9li454b9XT3bz6GwgrO2_Z6FJHPEkn_p7VWS7E1274PXXK5BIJllhtSIMqXjsJfrHGqI0gSvGkAf7mYo2ocZDBQNw8X7zBS2WeHZUR9ich5e0hxHgBSQ2-3yqBll45IaWGBC-DvLawU5Rz1n1vrcogXgN6RZp2A1xVU4Ht6-iT1qqJbcucWwg"
            tags={['Авторское']}
          />
        </div>
      </section>

      {/* Classic Section */}
      <section className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-outline rounded-full"></div>
          <h2 className="font-headline-sm text-headline-sm-mobile text-primary">Классика</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ProductCard 
            title="Капучино"
            desc="Классический баланс"
            price="280 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7_2P-js5iSdRRpUUNPWVsvw19YXGVkuywcNTvVbm9VnT9RFQ8eoXSH6pL2RAB4lUW6MLfWZ-ZOmaLKebEAw6Q7x9VmrwPMH9qT5bZXt-sYhAkHLna_1em5LnjhbJH4UrqBM0AICNRu_JQPghhSP7kHrdozfCZEJ7iy2xeDadj7Zu-HHvGBaD5U6rXNzbzWw8_aVW-kMViO94pCw_4tSR6c6TnT9gKNwr2aXjldgZ1t1yqPfGCvyX80OPjVvP4VQQ2oYjOCV9Qg"
          />
          <ProductCard 
            title="Эспрессо"
            desc="Заряд бодрости"
            price="150 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAYTIdBwp4jQ1YJ16ORcMV6LrDSKTkrvfFgz8fJnO_4pd4HaPNr-39dM_j79IkaeXcWXkUjhWwm7woPBhq556hiD2_Ngc5VjMjNtzNtgoh3un0Kf4Yl_hUqj5TVYHsbvUsGe2fPrWWd8LxAU2JwNCyk8KjjAfx8RqeO8cjVOnaUK5yjEPXK7iwXofEIqmRS8VsLnZS09q2xR25rK8F8pXWirVMmyNGXt5p40hpaVVbDqpwSgq_hRaZTS6AiwB-w1VSPctS7R15n5Q"
          />
          <ProductCard 
            title="Флэт Уайт"
            desc="Двойной эспрессо"
            price="320 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCVAFP2fVRg7zSOCk4iDVICeou6c-t_q9JraH4c4ooQRtkD5TBVojfivZnzz2zFYEZ_mWkfsgqbAe2r1q7B7q9O3aSShCUmukdE5naKi2oawENOe_18aTKxBbPr4Iz-sg3FSBawz07nc2VB5nf4MwWRWC91e8XsC5-y5yQk-6dB4lhUdHcq670FFazg4byOV24MkrUa384ojFEjbKsWykiRM-0wHkLOtRYj_BKFSnKH94a4Uv2fyEvYU1jWadwdYH9hgi_Y8-dhUA"
          />
          <ProductCard 
            title="Латте"
            desc="Много молока, мало пенки"
            price="350 ₽"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA7FUL-VUuRmP4GuzvAMkvHYlQFpJSgpa9AsyvCfId6ks0yiqZa6lgWBCbgN1lwlbJsUObpnEa8CCGEQMcuWQg7O6iqOrUtU7Ir-Jou6-Dh8kl_PmX4C2RSGrA3eDQcKYmBAllhV27N-uWfnPPmHtAJnbHvmfjDuZ58c9U1GpOn08IByktKuXVYah-gCMnDdfEl7HmvMDsa4ryaFw7mXEtkorVyuBvjdinNc02ITZjfS7NN3PgYrZ9osZCf_B-JXuwpazACjlmx_g"
          />
        </div>
      </section>
    </main>
  );
}

function ProductCard({ title, desc, price, imgSrc, tags = [] }: { title: string, desc: string, price: string, imgSrc: string, tags?: string[] }) {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(61,43,31,0.08)] group active:scale-95 transition-transform duration-300">
      <div className="relative h-40 w-full overflow-hidden">
        <img className="w-full h-full object-cover" alt={title} src={imgSrc} />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {tags.map(tag => (
            <span key={tag} className="bg-primary-container text-on-primary-container w-fit text-[10px] px-2 py-0.5 rounded-full font-label-sm uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-label-md text-primary truncate">{title}</h3>
        <p className="text-[11px] text-outline-variant mt-1 leading-tight line-clamp-2">{desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-primary font-label-md">{price}</span>
        </div>
      </div>
    </div>
  );
}
