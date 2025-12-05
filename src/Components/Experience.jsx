const Experience= () => {
    return(
        <>
        <section id="experience" className="w-full min-h-screen px-10 md:px-20 pt-[8rem] bg-[#0d0d11] text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400">Experience</h2>
             <div className="space-y-8">

          {/* Internship */}
          <div className="w-250 bg-[#16161d] p-4 rounded-xl shadow-lg border border-[#242430] mt-8">
            <h3 className="text-2xl font-semibold">
              Ascentech Information Technology — Intern
            </h3>
            <p className="text-gray-400 text-sm mt-1">Jan 2025 – Apr 2025</p>
            <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
              <li>Converted multiple legacy modules into React within just 3 months. Successfully migrated 3–4 major modules from old tech stack to React.</li>
              <li>Improved UI/UX by restructuring components and enhancing performance.</li>
              <li>Built reusable components and optimized frontend workflows.</li>
              <li>Gained hands-on exposure to API integrations and basic backend processes.</li>
            </ul>
          </div>

          {/* Full-time */}
          <div className="w-250 bg-[#16161d] p-6 rounded-xl shadow-lg border border-[#242430]">
            <h3 className="text-2xl font-semibold">
              Ascentech Information Technology — Software Developer
            </h3>
            <p className="text-gray-400 text-sm mt-1">Apr 2025 – Present</p>
            <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
              <li>Converted 10+ legacy modules into React and deployed them to production.</li>
              <li>Led frontend modernization efforts by improving structure, performance, and scalability.</li>
              <li>Implemented Auth0 authentication including login flow, roles, and access control.</li>
              <li>Worked on backend development using Node.js, creating APIs and handling integrations.</li>
              <li>Worked with Oracle Database, writing queries and gaining basic knowledge of stored procedures.</li>
              <li>Built 3 new modules from scratch in React (UI, state management, API handling).</li>
              <li>Able to clear testing points quickly and deliver fixes rapidly.</li>
            </ul>
          </div>

        </div>
        </section>
        </>
    )
}

export default Experience;