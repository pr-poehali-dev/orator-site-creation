import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "KUZIKOVA SCHOOL",
      "alternateName": "Школа ораторского мастерства Светланы Кузиковой",
      "url": "https://kuzikova-school.ru",
      "logo": "https://cdn.poehali.dev/files/7e98268b-4991-45ff-8a16-bc95b72168b3.png",
      "description": "Уникальный курс ораторского мастерства в Краснодаре. Групповые и индивидуальные занятия с театральным режиссером и психологом.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "улица Горького, 104, офис 26",
        "addressLocality": "Краснодар",
        "addressRegion": "Краснодарский край",
        "postalCode": "350000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.03547,
        "longitude": 38.975313
      },
      "telephone": "+79183111712",
      "email": "s_kuzikova@mail.ru",
      "sameAs": [
        "https://t.me/svetlana_kuzikova",
        "https://vk.com/svetlana_kuzikova",
        "https://rutube.ru/channel/27062031/"
      ],
      "founder": {
        "@type": "Person",
        "name": "Светлана Алексеевна Кузикова",
        "jobTitle": "Театральный режиссёр и психолог"
      }
    };

    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Ораторское искусство «Своя игра»",
      "description": "Уникальный курс ораторского мастерства, сочетающий театральную педагогику и психологию. Групповые и индивидуальные занятия для преодоления страха публичных выступлений.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "KUZIKOVA SCHOOL",
        "url": "https://kuzikova-school.ru"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Базовый курс",
          "price": "17500",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "validFrom": "2018-01-01"
        },
        {
          "@type": "Offer",
          "name": "Расширенный курс",
          "price": "24900",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "validFrom": "2018-01-01"
        }
      ],
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "blended",
          "duration": "P1M",
          "name": "Базовый курс"
        },
        {
          "@type": "CourseInstance",
          "courseMode": "blended",
          "duration": "P2M",
          "name": "Расширенный курс"
        }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://kuzikova-school.ru"
        }
      ]
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(courseSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
};

export default StructuredData;