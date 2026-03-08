export default function Footer() {
  return (
    <footer className="bg-hobbit-brown text-white py-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🏡</span>
              <h3 className="text-2xl font-bold">Hobbit Husbandry</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Dedicated to the art and science of hobbit care since the Third Age. 
              Bringing comfort, joy, and second breakfast to hobbits everywhere.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-lg">🌿</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-lg">📚</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-lg">🎭</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Hobbit Care Training</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hole Consultation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Garden Planning</li>
              <li className="hover:text-white cursor-pointer transition-colors">Meal Preparation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Emergency Care</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Hobbit Care Guide</li>
              <li className="hover:text-white cursor-pointer transition-colors">Recipe Collection</li>
              <li className="hover:text-white cursor-pointer transition-colors">Seasonal Calendar</li>
              <li className="hover:text-white cursor-pointer transition-colors">Community Forum</li>
              <li className="hover:text-white cursor-pointer transition-colors">Expert Tips</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 mb-4 md:mb-0">
              <p>&copy; 2024 Hobbit Husbandry. All rights reserved in the Shire and beyond.</p>
            </div>
            <div className="flex space-x-6 text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/60 italic">
              "It's the job that's never started as takes longest to finish." - Samwise Gamgee
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
