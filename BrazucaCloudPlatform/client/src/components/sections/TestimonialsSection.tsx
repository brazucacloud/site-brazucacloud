import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, StarHalf, MessageSquare, Quote } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface TestimonialProps {
  stars: number;
  content: string;
  authorName: string;
  authorRole: string;
  authorColor: string;
  authorInitials: string;
  index: number;
}

const Testimonial = ({ 
  stars, 
  content, 
  authorName, 
  authorRole, 
  authorColor,
  authorInitials,
  index
}: TestimonialProps) => {
  const renderStars = () => {
    const starsArray = [];
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starsArray.push(<Star key={i} className="fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      starsArray.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400" />);
    }

    return starsArray;
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Quote className="text-gray-300 h-10 w-10 mb-4" />
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 text-2xl flex">
          {renderStars()}
        </div>
      </div>
      <p className="text-gray-700 mb-6 italic">
        {content}
      </p>
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold ${authorColor}`}>
          {authorInitials}
        </div>
        <div>
          <h4 className="font-bold text-dark-blue">{authorName}</h4>
          <p className="text-gray-600 text-sm">{authorRole}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-[#0056b3]/5 to-[#8000ff]/5" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-inter text-[#0056b3]">{t("testimonials.title")}</h2>
        <p className="text-lg text-[#0056b3]/80 text-center mb-12 max-w-3xl mx-auto">
          {t("testimonials.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-[#0056b3]/10 hover:border-[#0056b3]/30 transition-all">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                  index === 1 ? 'bg-[#0056b3]' : index === 2 ? 'bg-[#8000ff]' : 'bg-[#0056b3]'
                }`}>
                  {t(`testimonials.testimonial${index}.initial`)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#0056b3]">{t(`testimonials.testimonial${index}.name`)}</h4>
                  <p className="text-[#0056b3]/70">{t(`testimonials.testimonial${index}.role`)}</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#8000ff]">★</span>
                ))}
              </div>
              <p className="text-[#0056b3]/80 italic">
                "{t(`testimonials.testimonial${index}.text`)}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;