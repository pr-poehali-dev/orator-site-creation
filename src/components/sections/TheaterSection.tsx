const TheaterSection = () => {
  return (
    <section id="theater" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Театр «Комильфо»
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Наши выпускники играют на сцене театра, применяя навыки ораторского мастерства в живых постановках и получая практический опыт публичных выступлений
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/ec918dae-38a2-4d12-af45-65ddbdcb96e6.JPG"
              alt="Выступление в театре Комильфо"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/898e2a43-89c2-4cdd-a6cc-00a638c03629.JPG"
              alt="Актёры театра Комильфо"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/a11109b0-914c-4a05-9e4c-e2b4e327596b.JPG"
              alt="Занятие по ораторскому мастерству"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/62867835-ef13-40aa-98c3-6840a822110f.JPG"
              alt="Выпускники курса с сертификатами"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <img 
            src="https://cdn.poehali.dev/files/dba690b5-c01e-4cd5-adae-fbcbc337fd59.JPG"
            alt="Спектакль театра Комильфо"
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default TheaterSection;
