import { ArrowRight, Phone, Play, Recycle } from 'lucide-react';
const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 to-green-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&h=600&fit=crop" 
            alt="Community" 
            className="w-full h-96 object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-6 hover:scale-110 transition">
              <Play className="w-8 h-8 text-green-600 fill-green-600" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection