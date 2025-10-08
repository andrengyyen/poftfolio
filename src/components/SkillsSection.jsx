import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", level: 95, category: "programming Languages" },
  { name: "C/C++", level: 90, category: "programming Languages" },
  { name: "Java", level: 85, category: "programming Languages" },
  { name: "C#", level: 80, category: "programming Languages" },
  { name: "HTML/CSS", level: 80, category: "programming Languages" },
  { name: "JavaScript/TypeScript", level: 80, category: "programming Languages" },

  // Data & AI Technologies
  { name: "Pandas", level: 90, category: "AI/ML" },
  { name: "NumPy", level: 85, category: "AI/ML" },
  { name: "Scikit-learn", level: 85, category: "AI/ML" },
  { name: "PyTorch", level: 80, category: "AI/ML" },
  { name: "Power BI", level: 85, category: "AI/ML" },
  { name: "Tableau", level: 80, category: "AI/ML" },

  // Cloud & Development Tools
  { name: "AWS (Cognito, Lambda, DynamoDB)", level: 90, category: "CloudDev" },
  { name: "Git/GitHub", level: 90, category: "CloudDev" },

  // CMT
  { name: "Trend", level: 90, category: "Chartered Market Technician" },
  { name: "Amplitude", level: 80, category: "Chartered Market Technician" },
  { name: "Cycle", level: 80, category: "Chartered Market Technician" },
  { name: "Moving Wave", level: 75, category: "Chartered Market Technician" },
];

const categories = ["all", "programming Languages", "AI/ML", "CloudDev", "Chartered Market Technician"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
