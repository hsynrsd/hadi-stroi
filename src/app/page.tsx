import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/construction-hero.jpg"
            alt="Construction Site"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Хади Строй
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Професионални строителни услуги и инфраструктурни проекти с над 15 години опит
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700"
            >
              Свържете се с нас
            </a>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Нашите Услуги
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Комплексни строителни решения за всеки проект
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Строителство на пътища',
                description: 'Проектиране и изграждане на пътна инфраструктура',
              },
              {
                title: 'Жилищно строителство',
                description: 'Изграждане на къщи и апартаменти',
              },
              {
                title: 'Електроинсталации',
                description: 'Професионални електрически инсталации',
              },
              {
                title: 'Инфраструктурни проекти',
                description: 'Комплексни инфраструктурни решения',
              },
              {
                title: 'Земни работи',
                description: 'Професионални земни работи и теренни изравнявания',
              },
              {
                title: 'Техника и оборудване',
                description: 'Наем на строителна техника и оборудване',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Нашите Ценности
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Качество',
                description: 'Високи стандарти и внимание към детайла',
              },
              {
                title: 'Надеждност',
                description: 'Спазване на сроковете и изпълнение на обещанията',
              },
              {
                title: 'Професионализъм',
                description: 'Опитни специалисти и модерно оборудване',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
