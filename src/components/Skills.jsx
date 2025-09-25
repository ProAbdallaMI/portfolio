const Skills = () => {
    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-white">
            <h2 className="text-3xl font-bold mb-6">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 border rounded shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                    <p className="text-gray-600">Experienced in ES6+, React, and Node.js.</p>
                </div>
                <div className="p-4 border rounded shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">Python</h3>
                    <p className="text-gray-600">Proficient in Django and Flask frameworks.</p>
                </div>
                <div className="p-4 border rounded shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">CSS</h3>
                    <p className="text-gray-600">Skilled in Tailwind CSS and Bootstrap.</p>
                </div>
                <div className="p-4 border rounded shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">Databases</h3>
                    <p className="text-gray-600">Experience with MySQL, PostgreSQL, and MongoDB.</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;