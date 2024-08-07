export default function ProjectsPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg">
          Here are some of the projects we have worked on.
        </p>
        <div className="mt-8 w-full max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Project 1: Python Web Scraper</h2>
            <p className="text-md mt-2">
              A web scraper built using Python and BeautifulSoup to extract data from websites and store it in a CSV file.
            </p>
            
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Project 2: HTML & CSS Portfolio</h2>
            <p className="text-md mt-2">
              A personal portfolio website designed using HTML CSS and JavaScript to showcase my projects and skills.
            </p>
            
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Project 3: JavaScript Quiz App</h2>
            <p className="text-md mt-2">
              An interactive quiz application built using JavaScript, HTML, and CSS to test users knowledge on various topics.
            </p>
            
            
          </div>
        </div>
      </div>
    </main>
  )
}
