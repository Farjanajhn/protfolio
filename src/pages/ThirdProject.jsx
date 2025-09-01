import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThirdProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 text-gray-800 px-6 md:px-20 py-16 space-y-20">

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          🎧 Bose Headphones: Comparing HCI Theories in Context
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          A case study comparing Activity Theory and Materiality Theory to explore how theoretical frameworks shape user experience design for smart headphones.
        </p>
      </div>

      {/* Project Overview */}
      <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800">📌 Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Team:</strong> Camilla, Farjana, Regina, Saga<br />
          <strong>Course:</strong> HCI Theory & Frameworks<br />
          <strong>Goal:</strong> To understand how Activity Theory and Materiality Theory influence interaction design using a smart wearable device — Bose noise-cancelling headphones.
        </p>
      </div>

      {/* Use Case Scenario */}
      <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800">🧠 Alicia's Journey: A Use Scenario</h2>
        <p className="text-gray-700">
          Alicia is a young woman using her Bose headphones throughout a typical day:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>She listens to music on her walk to work but nearly gets hit by a car due to reduced awareness.</li>
          <li>At the office, she uses the headphones in a video meeting and tries not to disturb others.</li>
          <li>At the gym, she sweats and feels discomfort from the heat inside the earcups.</li>
          <li>She falls asleep on the bus ride home, relying on her headphones for comfort and sound control.</li>
        </ul>
      </div>

      {/* Activity Theory */}
      <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800">📚 Activity Theory Perspective</h2>
        <p className="text-gray-700">
          From the lens of Activity Theory, we focused on user goals, tools, and context-aware interaction:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Headphones as mediating tools supporting purposeful activities (e.g., communication, movement, rest).</li>
          <li>Smart features like gesture-based muting, voice prompts, or proximity sensors to support multitasking.</li>
          <li>Adjustable settings based on context — like volume reduction in public or activating “meeting mode.”</li>
          <li>Designs aim to help users achieve goals efficiently and without disruption.</li>
        </ul>
      </div>

      {/* Materiality Theory */}
      <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800">🧵 Materiality Theory Perspective</h2>
        <p className="text-gray-700">
          Materiality Theory helped us focus on the sensory, embodied, and social dimensions of interaction:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Physical comfort: soft, breathable materials to reduce heat and pressure during prolonged wear.</li>
          <li>Social signaling: visual cues like LED indicators or adaptive headband angles for polite interaction.</li>
          <li>Presence and passivity: headphones that adapt without user effort (e.g., sleep detection or heating).</li>
          <li>Designs that respond to bodily states and afford more natural transitions between activities.</li>
        </ul>
      </div>

      {/* Comparative Analysis */}
      <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800">🔍 Theoretical Comparison</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Activity Theory</strong> emphasizes goals, control, and functional tool use.</li>
          <li><strong>Materiality Theory</strong> emphasizes form, texture, and bodily experiences.</li>
          <li>Used together, they address both rational and emotional aspects of the user experience.</li>
        </ul>
      </div>

      {/* Reflection */}
      <div className="text-left max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">💬 Reflections</h2>
        <p className="text-gray-700 leading-relaxed">
          This project showed how different theoretical frameworks shape not only the design process but also how we understand user experience. While Activity Theory structured our thinking around intentional action, Materiality Theory reminded us to prioritize sensation, embodiment, and ambient interaction. Together, they offered a richer and more inclusive perspective for designing smart wearables like Bose headphones.
        </p>
      </div>

      {/* Full Report PDF */}
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">📄 View Full Report</h2>
        <iframe
          src="/files/Bose-HCI-Theories-Report.pdf"
          title="Full Project Report"
          className="w-full h-[800px] border border-indigo-300 rounded-lg"
        ></iframe>
        <div className="text-center mt-4">
          <a
            href="/files/Bose-HCI-Theories-Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-800 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition"
          >
            📥 Open Full Report in New Tab
          </a>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <a href="/">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            ← Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default ThirdProject;