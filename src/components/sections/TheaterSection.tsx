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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/ec918dae-38a2-4d12-af45-65ddbdcb96e6.JPG"
              alt="Выступление в театре Комильфо"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/898e2a43-89c2-4cdd-a6cc-00a638c03629.JPG"
              alt="Актёры театра Комильфо"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/a11109b0-914c-4a05-9e4c-e2b4e327596b.JPG"
              alt="Занятие по ораторскому мастерству"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/62867835-ef13-40aa-98c3-6840a822110f.JPG"
              alt="Выпускники курса с сертификатами"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/dba690b5-c01e-4cd5-adae-fbcbc337fd59.JPG"
              alt="Спектакль театра Комильфо"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/1ea38fef-76c6-4428-8666-46583fc2e90b.jpg"
              alt="Труппа театра Комильфо"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/4d52333f-dba7-40ba-829a-5ff630023d39.jpg"
              alt="Сцена из спектакля"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/8e972557-f9eb-465d-8627-c70739fcbdc8.jpg"
              alt="Выпускники с букетами"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheaterSection;