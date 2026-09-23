import { Star } from 'lucide-react';

const ratings = [
  {
    id: 1,
    author: 'Eleanor Vance',
    role: 'Food Critic',
    text: 'Aura strips away the unnecessary, leaving only the purest essence of flavor. A triumph of minimalism in both design and culinary execution.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Marcus Chen',
    role: 'Local Guide',
    text: 'The ambiance is breathtakingly serene. Every detail, from the acoustics to the plating, is meticulously curated for a flawless experience.',
    rating: 5,
  },
  {
    id: 3,
    author: 'Sarah Jenkins',
    role: 'Gastronomy Blogger',
    text: 'A profound dining journey. The tasting menu is an exercise in restraint and perfection. Simply unforgettable.',
    rating: 5,
  },
];

export default function Ratings() {
  return (
    <section id="ratings" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-4">Guest Experiences</h2>
          <div className="w-12 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {ratings.map((review) => (
            <div key={review.id} className="flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-black text-black" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-black font-light leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </blockquote>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-black">{review.author}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}