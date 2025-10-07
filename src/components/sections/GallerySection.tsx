const GallerySection = () => {
  const images = [
    {
      url: 'https://cdn.poehali.dev/files/f91fe39c-5b85-40fd-8508-7be5e3887e08.jpg',
      alt: 'Выпускники курса с сертификатами'
    },
    {
      url: 'https://cdn.poehali.dev/files/292fae68-f4e1-4044-8bc3-10402cb51cc5.jpg',
      alt: 'Вручение сертификатов выпускникам'
    },
    {
      url: 'https://cdn.poehali.dev/files/78a17ee6-22c6-4b1b-b920-f244521a96b9.jpg',
      alt: 'Радостные выпускники с сертификатами'
    },
    {
      url: 'https://cdn.poehali.dev/files/34ad4c6b-d95a-40d1-9e5d-ae6916c7ebcd.jpg',
      alt: 'Группа выпускников после окончания курса'
    },
    {
      url: 'https://cdn.poehali.dev/files/13bda4aa-17e4-48b2-b08e-e918a8a8207b.JPG',
      alt: 'Выпускной спектакль курса ораторского мастерства'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши выпускники</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Более 500 человек уже прошли курс и получили сертификаты
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
