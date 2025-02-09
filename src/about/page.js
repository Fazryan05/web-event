export default function About() {
    return (
      <div className="space-y-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your trusted partner in event management</p>
        </section>
        <section className="prose lg:prose-xl mx-auto">
          <p className="mb-6">
            Web Event is a leading event management platform dedicated to helping organizations create,
            manage, and execute successful events of all sizes. Whether you're planning a corporate
            conference, a community gathering, or a virtual workshop, we provide the tools and support
            you need to make it happen.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To empower event organizers with innovative technology and solutions that make event
            planning seamless, efficient, and impactful.
          </p>
        </section>
      </div>
    );
  }
  