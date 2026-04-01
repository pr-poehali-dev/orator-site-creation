import { Helmet } from "react-helmet-async";
import { ExternalLink, Star, MapPin, Award } from "lucide-react";

const AwardPage = () => {
  return (
    <>
      <Helmet>
        <title>Kuzikova School — Награда «Хорошее Место» 2026 | Яндекс Карты</title>
        <meta
          name="description"
          content="Kuzikova School получила награду «Хорошее Место 2026» от Яндекс Карты. Высокий рейтинг и доверие клиентов!"
        />
      </Helmet>

      <div className="min-h-screen bg-[#0d0010] flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orange-600/15 rounded-full blur-[90px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">

          {/* Header label */}
          <p className="text-white/70 text-sm uppercase tracking-widest mb-2 font-light">
            Яндекс Карты
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
            Награда «Хорошее Место»<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              наша!
            </span>
          </h1>

          {/* Award image — vertical mobile format */}
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/40 via-red-600/30 to-purple-700/40 blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700" />

            <img
              src="https://cdn.poehali.dev/projects/982ce877-171e-45ff-91a1-ae753687e607/bucket/8531a723-daca-40a4-bc2e-219d2dbe7e43.png"
              alt="Kuzikova School — Хорошее Место 2026, Яндекс Карты"
              className="relative rounded-3xl shadow-2xl w-full max-w-xs md:max-w-sm object-cover"
            />
          </div>

          {/* Description */}
          <div className="mt-10 text-center space-y-3 max-w-md">
            <div className="flex items-center justify-center gap-2 text-orange-400">
              <Award className="w-5 h-5" />
              <span className="text-lg font-semibold">Хорошее Место 2026</span>
              <Award className="w-5 h-5" />
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Кузикова Школа получила официальную награду от Яндекс Карт — знак доверия
              и высокой оценки от наших клиентов. Спасибо всем, кто оставил отзывы!
            </p>
          </div>

          {/* Stars row */}
          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <a
              href="https://yandex.ru/maps/org/108893235678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-orange-500/40 transition-all duration-300 flex-1"
            >
              <MapPin className="w-4 h-4" />
              Посмотреть на карте
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="/"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex-1"
            >
              На главную
            </a>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-white/30 text-xs text-center">
            © Kuzikova School · Яндекс Карты · Хорошее Место 2026
          </p>
        </div>
      </div>
    </>
  );
};

export default AwardPage;
