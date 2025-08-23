function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoader", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
  });
});

// Mobile menu toggle 
const menuToggle = document.querySelector('.menu.toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Sales Dashboard",
      description: "Interactive Power BI dashboard for sales performance and trends.",
      link: "https://your-sales-dashboard-link.com",
      thumbnail: "https://via.placeholder.com/400.png?text=Sales+Dashboard",
    },
    {
      title: "Web Portfolio",
      description: "Personal portfolio website showcasing skills and experience.",
      link: "https://your-portfolio-link.com",
      thumbnail: "https://via.placeholder.com/400.png?text=Web+Portfolio",
    },
    {
      title: "Customer Analysis",
      description: "SQL + Excel project analyzing customer purchasing behavior.",
      link: "https://your-customer-analysis-link.com",
      thumbnail: "https://via.placeholder.com/400.png?text=Customer+Analysis",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      {/* Square grid */}      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="aspect-square transition-transform transform hover:scale-105 hover:shadow-lg rounded-2xl overflow-hidden cursor-pointer">
              {/* Full square container */}   
              <div className="flex flex-col h-full">
                {/* Thumbnail takes 60% of square */}
               <div className="flex-[0.6] overflow-hidden">  
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text takes remaining 40% */}
               <CardContent className="flex-[0.4] p-4 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                  <span className="text-purple-600 font-medium hover:underline mt-2">
                    View Project →
                  </span>
                </CardContent>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
} 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.style.display = "block";
        formMessage.style.color = "green";
        formMessage.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
    }
  });
});

