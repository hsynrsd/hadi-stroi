import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Магистрала А1',
      description: 'Изграждане на участък от магистрала А1 с дължина 15 км',
      image: '/highway-project.jpg',
      category: 'Пътна инфраструктура',
      year: '2022',
    },
    {
      title: 'Жилищен комплекс "Зелени поляни"',
      description: 'Изграждане на жилищен комплекс с 5 сгради и 120 апартамента',
      image: '/residential-project.jpg',
      category: 'Жилищно строителство',
      year: '2021',
    },
    {
      title: 'Индустриален парк',
      description: 'Изграждане на инфраструктура за индустриален парк',
      image: '/industrial-park.jpg',
      category: 'Инфраструктурни проекти',
      year: '2023',
    },
    {
      title: 'Ремонт на градски улици',
      description: 'Ремонт и реконструкция на градски улици',
      image: '/city-streets.jpg',
      category: 'Пътна инфраструктура',
      year: '2022',
    },
    {
      title: 'Електрически мрежи',
      description: 'Модернизация на електрически мрежи',
      image: '/electrical-grid.jpg',
      category: 'Електроинсталации',
      year: '2021',
    },
    {
      title: 'Търговски център',
      description: 'Изграждане на търговски център',
      image: '/shopping-center.jpg',
      category: 'Търговски обекти',
      year: '2023',
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/projects-hero.jpg"
            alt="Our Projects"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Нашите Проекти
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Разгледайте нашите успешно завършени проекти
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 