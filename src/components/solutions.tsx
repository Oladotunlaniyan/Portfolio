import Solution1 from "../assets/solutions.jpg"

const products = [
    {
        image: Solution1.src,
        name: "Decentralized Emergency Response System",
        description: "A platform that enables communities to coordinate and respond to emergencies without relying on centralized authorities.",
    }, 
    {
        image: null,
        name: "Community Newsletter",
        description: "A decentralized newsletter platform where community members can share news, updates, and stories without censorship.",
    }, 
    {
        image: null,
        name: "Whisper Board App",
        description: "An encrypted messaging application that allows users to communicate securely without fear of surveillance or data breaches.",
    },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-200 bg-clip-text">
            We build solutions that matter
          </h2>
          <p className="text-md text-gray-400 max-w-5xl mx-auto leading-relaxed">
            As a circle our main aim is to build and deploy solutions that leverage trustless and censorship-resistant technologies to empower individuals and communities, as well as tackle local issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-8 border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-2"
            >
              {product.image && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              {!product.image && (
                <div className="mb-6 h-48 rounded-xl flex items-center justify-center cursor-pointer">
                  <div className="w-16 h-16 border-4 border-gray-700 rounded-lg" />
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:bg-clip-text transition-all duration-300">
                {product.name}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>

              <div className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;