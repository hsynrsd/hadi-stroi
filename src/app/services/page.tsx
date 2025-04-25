import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Строителство на пътища',
      description: 'Професионално проектиране и изграждане на пътна инфраструктура, включително магистрали, междуградски пътища и градски улици.',
      image: '/road-construction.jpg',
      features: [
        'Проектиране на пътна инфраструктура',
        'Изграждане на магистрали и междуградски пътища',
        'Ремонт и поддръжка на пътища',
        'Дренажни системи',
        'Маркировка и сигнализация',
      ],
    },
    {
      title: 'Жилищно строителство',
      description: 'Изграждане на модерни жилищни сгради, къщи и апартаменти с внимание към качеството и комфорта.',
      image: '/residential-construction.jpg',
      features: [
        'Изграждане на жилищни сгради',
        'Строителство на къщи',
        'Ремонт и реконструкция',
        'Интериорни работи',
        'Фасадни работи',
      ],
    },
    {
      title: 'Електроинсталации',
      description: 'Професионални електрически инсталации и системи за осветление, спазващи всички стандарти за безопасност.',
      image: '/electrical-work.jpg',
      features: [
        'Проектиране на електрически системи',
        'Монтаж на електрически инсталации',
        'Системи за осветление',
        'Сигурност и защита',
        'Поддръжка и ремонт',
      ],
    },
    {
      title: 'Инфраструктурни проекти',
      description: 'Комплексни инфраструктурни решения за общински и частни проекти.',
      image: '/infrastructure.jpg',
      features: [
        'Водоснабдяване и канализация',
        'Топлоснабдяване',
        'Газови мрежи',
        'Телекомуникации',
        'Градска инфраструктура',
      ],
    },
    {
      title: 'Земни работи',
      description: 'Професионални земни работи и теренни изравнявания с модерна техника.',
      image: '/earthworks.jpg',
      features: [
        'Теренни изравнявания',
        'Изкопи и насипи',
        'Дренажни системи',
        'Фундаментни работи',
        'Подготовка на терени',
      ],
    },
    {
      title: 'Техника и оборудване',
      description: 'Наем на строителна техника и оборудване за различни видове строителни работи.',
      image: '/equipment.jpg',
      features: [
        'Багери и екскаватори',
        'Булдозери',
        'Камиони',
        'Кранове',
        'Специализирана техника',
      ],
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.jpg"
            alt="Our Services"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Нашите Услуги
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Професионални строителни услуги и инфраструктурни проекти
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="lg:grid lg:grid-cols-2 lg:gap-8"
              >
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="mt-8 lg:mt-0">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-lg text-gray-500">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Основни характеристики:
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-indigo-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 