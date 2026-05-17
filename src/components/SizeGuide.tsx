import { Ruler } from "lucide-react";

export default function SizeGuide() {
  const sizes = [
    { size: "XS", chest: "86-90", length: "65", shoulder: "40" },
    { size: "S", chest: "90-96", length: "67", shoulder: "42" },
    { size: "M", chest: "96-102", length: "69", shoulder: "44" },
    { size: "L", chest: "102-108", length: "71", shoulder: "46" },
    { size: "XL", chest: "108-114", length: "73", shoulder: "48" },
    { size: "XXL", chest: "114-120", length: "75", shoulder: "50" },
  ];

  return (
    <section id="sizes" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Помощь
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-3 mb-4">
            Таблица размеров
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Все размеры указаны в сантиметрах. Если вы между двумя размерами,
            рекомендуем выбрать больший.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Размер
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Обхват груди
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Длина
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Плечи
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s, i) => (
                  <tr
                    key={s.size}
                    className={`border-b border-neutral-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-neutral-50"
                    } hover:bg-brand-50 transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-neutral-900 text-white rounded-lg font-bold text-sm">
                        {s.size}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-700 font-medium">
                      {s.chest} см
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-700 font-medium">
                      {s.length} см
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-700 font-medium">
                      {s.shoulder} см
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 bg-brand-50 rounded-xl p-4 border border-brand-100">
          <Ruler className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-brand-800">
            <strong>Совет:</strong> Для определения размера измерьте обхват груди
            по самой выступающей точке. Сантиметровая лента должна проходить
            горизонтально, плотно прилегая к телу, но не стягивая его.
          </p>
        </div>
      </div>
    </section>
  );
}
