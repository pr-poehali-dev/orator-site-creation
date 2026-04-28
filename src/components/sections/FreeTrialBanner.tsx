import Icon from '@/components/ui/icon';

const FreeTrialBanner = () => {
  return (
    <section className="py-6 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-32 translate-y-32 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Бейдж */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black text-sm font-black px-4 py-1.5 rounded-full shadow-lg animate-bounce">
            <Icon name="Flame" size={16} />
            БЕСПЛАТНО — ТОЛЬКО 3 ДАТЫ
          </div>
        </div>

        <div className="text-center text-white mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 leading-tight">
            Бесплатные пробные занятия
          </h2>
          <p className="text-lg md:text-xl font-semibold text-orange-100 mb-1">
            Ораторский курс «Импровизация. Сторителлинг»
          </p>
        </div>

        {/* Даты */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {[
            { date: '29 апреля', day: 'вторник' },
            { date: '06 мая', day: 'вторник' },
            { date: '13 мая', day: 'вторник' },
          ].map((item) => (
            <div
              key={item.date}
              className="bg-white/15 border-2 border-white/40 backdrop-blur-sm rounded-2xl px-5 py-3 text-center min-w-[130px]"
            >
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <Icon name="Calendar" size={15} className="text-yellow-300" />
                <span className="text-yellow-300 text-xs font-semibold uppercase tracking-wide">{item.day}</span>
              </div>
              <p className="text-white font-black text-xl">{item.date}</p>
              <p className="text-orange-100 text-sm font-semibold">в 19:00</p>
            </div>
          ))}
        </div>

        {/* Адрес */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-start gap-2 bg-white/15 border border-white/30 rounded-xl px-5 py-3 max-w-md text-center">
            <Icon name="MapPin" size={18} className="text-yellow-300 flex-shrink-0 mt-0.5" />
            <p className="text-white text-sm md:text-base font-medium leading-snug">
              г. Краснодар, ул. Горького, 104, офис 26<br />
              <span className="text-orange-100 text-sm">код двери: 26</span>
            </p>
          </div>
        </div>

        {/* Кнопка */}
        <div className="flex justify-center">
          <a
            href="tel:+79183111712"
            className="inline-flex items-center gap-3 bg-white text-orange-600 font-black text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Icon name="Phone" size={22} />
            +7 918 311-17-12
            <span className="text-sm font-semibold text-orange-400 hidden sm:inline">— есть вопросы? Звоните!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialBanner;
