export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hobbit-gold/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-shire-green/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-hobbit-brown/20 rounded-full blur-lg"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-6xl mb-4 block">🏡</span>
          <h1 className="text-5xl md:text-7xl font-bold text-hobbit-brown mb-6">
            Hobbit Husbandry
          </h1>
          <p className="text-xl md:text-2xl text-hobbit-green mb-8 max-w-3xl mx-auto">
            The ancient art of caring for your beloved hobbits. From second breakfast to elevenses, 
            we'll teach you everything you need to know about hobbit care and comfort.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="hobbit-btn text-lg">
            Start Your Journey 🌿
          </button>
          <button className="bg-transparent border-2 border-hobbit-green text-hobbit-green px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-hobbit-green hover:text-white">
            Learn More
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hobbit-card">
            <span className="text-4xl mb-3 block">🍄</span>
            <h3 className="text-xl font-semibold text-hobbit-brown mb-2">Proper Nutrition</h3>
            <p className="text-hobbit-green">Seven meals a day, carefully planned and lovingly prepared</p>
          </div>
          
          <div className="hobbit-card">
            <span className="text-4xl mb-3 block">🌱</span>
            <h3 className="text-xl font-semibold text-hobbit-brown mb-2">Garden Care</h3>
            <p className="text-hobbit-green">Maintaining the perfect hobbit-hole garden for optimal happiness</p>
          </div>
          
          <div className="hobbit-card">
            <span className="text-4xl mb-3 block">📚</span>
            <h3 className="text-xl font-semibold text-hobbit-brown mb-2">Comfort & Culture</h3>
            <p className="text-hobbit-green">Creating the ideal environment for reading and pipe-smoking</p>
          </div>
        </div>
      </div>
    </section>
  )
}
