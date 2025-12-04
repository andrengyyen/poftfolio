import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Public Transport Chatbot",
    description: "Presented at Deakin InnoFes 2025, PT Chatbot gives user advice about public transport, route, trip planner and disruptions/delays.",
    image: "/projects/project1.png",
    tags: ["Python", "Rasa", "HTML/CSS", "Javascript"],
    demoUrl: "https://www.linkedin.com/posts/andre-nguyen-0298a9287_experiences-as-student-representative-activity-7376782506324447232-ZVLX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4tuEBkwqqmDhwjY6v-Y3RSHD4BSFCKQ4",
    githubUrl: "https://github.com/Chameleon-company/MOP-Code/tree/master/artificial-intelligence/Public%20Transport%20Chatbot",
  },
  {
    id: 4,
    title: "Integrating CMT and Machine Learning (ML) to predict trend-reversal area (macro)",
    description:
      "Cross-validation of Chartered Market Technician + Classification and Time-series ML models to predict trend-reversal point.",
    image: "/projects/project4.png",
    tags: ["CMT", "Python", "Pandas", "Scikit-learn"],
    demoUrl: "#contact",
    githubUrl: "#contact",
  },
  {
    id: 5,
    title: "Research Project",
    description:
      "Exploration and mitigation of deep learning-based sleep apnea detection",
    image: "/projects/project5.png",
    tags: ["Research"],
    demoUrl: "#",
    githubUrl: "https://github.com/andrengyyen/sleep-apnea",
  },
  {
    id: 3,
    title: "Kaggle Datathon Global Challenge",
    description:
      "Using socio-demographic, diagnostic, and fMRI data to build machine learning models to predict ADHD diagnosis.",
    image: "/projects/project3.png",
    tags: ["Python", "Pandas", "Scikit-learn"],
    demoUrl: "https://www.kaggle.com/competitions/widsdatathon2025",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-comerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication, payment processing and order management.",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "JavaScript"],
    demoUrl: "https://deakin.au.panopto.com/Panopto/Pages/Viewer.aspx?id=3a781676-6890-4af1-8a33-b1fb01490f57",
    githubUrl: "#",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
