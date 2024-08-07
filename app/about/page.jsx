export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          We are a team of passionate developers with experience in building web applications
          using modern technologies.
        </p>
        <div className="flex flex-col space-y-8 w-full max-w-4xl">

          <div className="flex flex-col items-center">
            <img src="/khush.jpeg" alt="Khushpreet Singh Gill" className="rounded-full w-24 h-24 mb-4 object-cover" />
            <h2 className="text-2xl font-semibold">Khushpreet Singh Gill</h2>
            <p className="text-lg">
              Khushpreet is a full-stack developer with a strong background in React and Node.js
              He has a knack for creating seamless user experiences and enjoys tackling complex problems.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/Jashan.jpeg" alt="Jashanpreet Singh" className="rounded-full w-24 h-24 mb-4 object-cover" />
            <h2 className="text-2xl font-semibold">Jashanpreet Singh</h2>
            <p className="text-lg">
              Jashanpreet is a frontend developer who specializes in creating intuitive and beautiful interfaces. 
              He is skilled in HTML, CSS, and JavaScript, and has extensive experience with frameworks like Vue.js and Angular.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/Rav.jpeg" alt="Ravneet Singh" className="rounded-full w-24 h-24 mb-4 object-cover" />
            <h2 className="text-2xl font-semibold">Ravneet Singh</h2>
            <p className="text-lg">
              Ravneet is a backend developer with expertise in databases and server-side logic. 
              He is proficient in Python and Django, and enjoys optimizing performance and ensuring security.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  )
}
