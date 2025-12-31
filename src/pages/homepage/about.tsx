export default function AboutSection() {
  return (
    <section className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-8 leading-tight">
      <div className="max-w-3xl w-full">
        {/* Main Content */}
        <div className="space-y-16">
          {/* Hero Statement */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light text-neutral-900 ">
              I build tools & applications people love, then teach them why.
            </h1>
          </div>

          {/* Core Bio */}
          <div className="space-y-4 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            <p>
              I've spent 4 years at the intersection of code and community. I've worked on 
              systems that serve thousands and written documentation that actually 
              gets read.
            </p>
            <p>
              The work splits naturally. Both require the same rigor, one in programming languages, 
              the other in clarity.
            </p>
            <p>
              I've spoken at conferences across sub-saharan countries, contributed to 
              open source projects used by a lot of people, and mentored teams through 
              technical pivots.
            </p>
          </div>

          {/* Subtle Expertise Markers */}
          <div className="pt-3 border-t border-neutral-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-neutral-500 uppercase tracking-wider">
              <div>
                <div className="font-medium text-neutral-900 mb-1">Stack</div>
                <div>Cracked</div>
              </div>
              <div>
                <div className="font-medium text-neutral-900 mb-1">Speaking</div>
                <div>40+ Events</div>
              </div>
              <div>
                <div className="font-medium text-neutral-900 mb-1">Writing</div>
                <div>Bi-Weekly</div>
              </div>
               <div>
                <div className="font-medium text-neutral-900 mb-1">Content</div>
                <div>Weekly</div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="pt-6 space-y-4">
            <blockquote className="text-2xl md:text-3xl font-light text-neutral-900 leading-relaxed italic">
              "The best user experience is invisible. You only notice it 
              when it's absent."
            </blockquote>
          </div>
          </div>
        
        {/* Footer Note*/}
        <div className="mt-28 pt-4 border-t border-neutral-200 text-sm text-neutral-400 text-center">
          Currently exploring the future of AI-assisted development · Open to developer and advocacy roles
        </div>
      </div>
    </section>
  );
}