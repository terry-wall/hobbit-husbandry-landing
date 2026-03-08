export default function Features() {
  const features = [
    {
      icon: "🥧",
      title: "Meal Planning Mastery",
      description: "Learn the sacred schedule: Breakfast, Second Breakfast, Elevenses, Luncheon, Afternoon Tea, Dinner, and Supper. Each meal carefully timed for optimal hobbit contentment.",
      details: ["Traditional recipes", "Seasonal menus", "Pantry management"]
    },
    {
      icon: "🏡",
      title: "Hobbit-Hole Optimization",
      description: "Design and maintain the perfect underground dwelling with round doors, cozy interiors, and excellent ventilation for pipe smoke.",
      details: ["Circular architecture", "Root cellar design", "Garden integration"]
    },
    {
      icon: "🌿",
      title: "Behavioral Understanding",
      description: "Understand hobbit psychology, from their love of routine to their occasional bursts of unexpected adventure. Keep them grounded but not bored.",
      details: ["Daily routines", "Social needs", "Adventure management"]
    },
    {
      icon: "🚬",
      title: "Pipe-Weed Cultivation",
      description: "Grow and cure the finest pipe-weed varieties for your hobbit's smoking pleasure. From Old Toby to Longbottom Leaf.",
      details: ["Soil preparation", "Harvesting techniques", "Curing processes"]
    },
    {
      icon: "👥",
      title: "Social Enrichment",
      description: "Organize proper hobbit gatherings, birthday parties, and community events. Hobbits thrive on social connections and storytelling.",
      details: ["Party planning", "Gift traditions", "Storytelling circles"]
    },
    {
      icon: "📖",
      title: "Literary Environment",
      description: "Curate the perfect library and reading nook. Hobbits love books, maps, and genealogical charts of their extensive family trees.",
      details: ["Book selection", "Reading spaces", "Family records"]
    }
  ]

  return (
    <section className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-hobbit-brown mb-6">
            Comprehensive Hobbit Care
          </h2>
          <p className="text-xl text-hobbit-green max-w-3xl mx-auto">
            Our time-tested methods ensure your hobbit lives a long, comfortable, and remarkably 
            peaceful life in the Shire and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="hobbit-card group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-hobbit-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-hobbit-green mb-4 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-1">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-hobbit-green/80 flex items-center">
                    <span className="w-1 h-1 bg-hobbit-gold rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="hobbit-card max-w-4xl mx-auto">
            <span className="text-6xl mb-4 block">🎓</span>
            <h3 className="text-3xl font-bold text-hobbit-brown mb-4">
              Become a Certified Hobbit Husbandry Expert
            </h3>
            <p className="text-hobbit-green mb-6 text-lg">
              Join our comprehensive certification program and learn from the Shire's most experienced 
              hobbit caretakers. Graduate with confidence and a deep understanding of hobbit culture.
            </p>
            <button className="hobbit-btn text-lg mr-4">
              Enroll Now 📜
            </button>
            <button className="bg-hobbit-gold text-hobbit-brown px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
