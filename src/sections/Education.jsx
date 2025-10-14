import Certificate from "../components/education/Certificate";

const IT = {
    school: "University Of Sudan",
    date: "Aug 2021 - Aug 2025",
    field: "Information Technology",
    about: "Sudan University of Science and Technology provides an excellent learning environment that encourages students to grow together and explore a variety of courses offered both online and in person, including Networking, Programming, and Operating Systems."
}

const IBM = {
    school: "IBM - Technology Company",
    date: "Jun 2024 - Jun 2025",
    field: "Professional Frontend",
    about: "IBM’s Front-End Developer Professional Certificate on Coursera is a compact, project-focused program that teaches core frontend skills — HTML, CSS, JavaScript — and key tools/topics like React, Git & GitHub, Bootstrap, UI/UX design, plus a capstone project to build a portfolio-ready app"
}

const education = () => {
    return (
        <section className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-2xl font-bold">Education</h1>
            <p className="text-paragraph w-70/100 text-center">this eductoin parahpa  ewioek re fto be the best programmer ever is random values to make it valueble</p>
            <div className="bg-white w-full p-10">
                <Certificate certData={IT} />
                <hr className="text-background w-full my-5" />
                <Certificate certData={IBM} />
            </div>
        </section>
    )
}

export default education;