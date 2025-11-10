import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const trendingCourses = [
    {
      id: 1,
      title: 'AI & Machine Learning Basics',
      description: 'Introduction to artificial intelligence and machine learning concepts',
      level: 'Beginner',
      duration: '6 weeks',
    },
    {
      id: 2,
      title: 'Cybersecurity Fundamentals',
      description: 'Learn essential cybersecurity principles and best practices',
      level: 'Intermediate',
      duration: '8 weeks',
    },
    {
      id: 3,
      title: 'Cloud Computing with AWS',
      description: 'Master cloud computing concepts using Amazon Web Services',
      level: 'Intermediate',
      duration: '10 weeks',
    },
    {
      id: 4,
      title: 'Data Science Essentials',
      description: 'Explore data analysis, visualization, and statistical modeling',
      level: 'Beginner',
      duration: '12 weeks',
    },
    {
      id: 5,
      title: 'Web3 & Blockchain Development',
      description: 'Build decentralized applications using blockchain technology',
      level: 'Advanced',
      duration: '14 weeks',
    },
    {
      id: 6,
      title: 'Internet of Things (IoT) Projects',
      description: 'Create connected devices and smart systems with IoT',
      level: 'Intermediate',
      duration: '9 weeks',
    },
  ]

  const filteredCourses = trendingCourses.filter(
    course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Explore Courses</h1>
          <p className="text-text-secondary mb-8">Discover trending courses in technology</p>

          <div className="mb-8">
            <div className="relative max-w-xl bg-card-bg backdrop-blur-lg border border-border rounded-full">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-3 bg-transparent text-text-primary border-0 focus:outline-none focus:ring-0"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-text-secondary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className="bg-card-bg backdrop-blur-lg overflow-hidden border border-border rounded-2xl shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-text-primary">{course.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-accent text-background rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">{course.duration}</span>
                    <Link
                      to={`/course/${course.id}`}
                      className="text-accent hover:text-[#00cc6a] font-medium"
                    >
                      Go to Course →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
