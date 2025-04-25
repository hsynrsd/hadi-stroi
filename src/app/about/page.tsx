import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About Us"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            За Нас
          </h1>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Нашата История
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Хади Строй е основана през 2008 година с цел да предоставя висококачествени строителни услуги.
                За повече от 15 години, ние сме изградили репутация на надежден партньор в строителната индустрия.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Нашият екип от опитни професионалисти работи с прецизност и внимание към детайла,
                гарантирайки изпълнението на всеки проект според най-високите стандарти.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <Image
                src="/company-history.jpg"
                alt="Company History"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Мисия и Визия
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Нашата Мисия</h3>
                  <p className="mt-2 text-lg text-gray-500">
                    Да предоставяме висококачествени строителни услуги, които надхвърлят очакванията на нашите клиенти,
                    като спазваме всички стандарти за безопасност и качество.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Нашата Визия</h3>
                  <p className="mt-2 text-lg text-gray-500">
                    Да бъдем лидер в строителната индустрия чрез иновации, устойчивост и изключително обслужване на клиентите.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Image
                src="/mission-vision.jpg"
                alt="Mission and Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Нашият Екип
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Опитни професионалисти, посветени на качеството и иновациите
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Иван Иванов',
                role: 'Управител',
                description: 'С над 20 години опит в строителната индустрия',
              },
              {
                name: 'Джингиз Рашид',
                role: 'Главен техник',
                description: 'Специалист в инфраструктурните проекти',
              },
              {
                name: 'Мария Георгиева',
                role: 'Проектен мениджър',
                description: 'Експерт в управлението на строителни проекти',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-indigo-600">{member.role}</p>
                <p className="mt-2 text-base text-gray-500">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 