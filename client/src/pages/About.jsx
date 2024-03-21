export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About MERN' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to MERN's Blog! This blog was created by MERN Ghavidel
              as a personal project to share his thoughts and ideas with the
              world. MERN is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. MERN is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
