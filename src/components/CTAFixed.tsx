import { Phone } from "lucide-react";

const CTAFixed = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5511910183401"
        className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-md shadow-lg hover:bg-primary/90 transition-colors font-mono text-xs uppercase tracking-wider"
      >
        <Phone className="h-4 w-4" />
        Agende uma consultoria
      </a>
    </div>
  );
};

export default CTAFixed;