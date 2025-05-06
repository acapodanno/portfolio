import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Contattami
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Hai un progetto in mente o vuoi discutere di opportunità? Non esitare a contattarmi!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Informazioni di Contatto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                    <a href="mailto:alessandro.capodanno95@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      alessandro.capodanno95@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Telefono</h4>
                    <a href="tel:+393891987818" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      (+39) 389 198 7818
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Indirizzo</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Via del Campo, 80030<br />
                      Tufino, Italia
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Data di nascita: 30/08/1995<br />
                    Nazionalità: Italiana
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Seguimi</h4>
                <div className="flex space-x-4">
                  {['github', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="bg-white dark:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                      aria-label={`Visita il mio profilo ${social}`}
                    >
                      <span className="text-gray-700 dark:text-gray-300 hover:text-white transition-colors duration-300">
                        {social.charAt(0).toUpperCase()}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Invia un Messaggio</h3>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300">
                    Il tuo messaggio è stato inviato con successo! Ti risponderò al più presto.
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Oggetto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Invia Messaggio
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;