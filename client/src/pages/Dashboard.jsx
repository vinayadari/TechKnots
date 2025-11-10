import React from 'react'

export default function Dashboard() {
  const enrolled = [
    { id: 1, title: 'AI Foundations', progress: 64 },
    { id: 2, title: 'Cybersecurity 101', progress: 38 },
    { id: 3, title: 'Data Science Bootcamp', progress: 82 },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="panel p-5 h-max sticky top-24">
          <h2 className="text-sm uppercase tracking-wider text-text-secondary mb-4">Navigation</h2>
          <nav className="space-y-2">
            {['Overview', 'My Courses', 'Certificates', 'Settings'].map((item, idx) => (
              <button key={idx} className="w-full text-left px-3 py-2 rounded-lg hover:bg-card-bg text-text-primary border border-transparent hover:border-border transition">
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="display-font text-2xl font-bold text-text-primary">Dashboard</h1>
            <button className="bg-accent text-background px-4 py-2 rounded-lg glow-button font-medium">New Course</button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Learning Streak', value: '7 days' },
              { label: 'Certifications', value: '3' },
              { label: 'Hours Learned', value: '126h' },
            ].map((s, i) => (
              <div key={i} className="panel p-5">
                <p className="text-text-secondary text-sm">{s.label}</p>
                <p className="text-text-primary text-2xl font-semibold mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Enrolled courses */}
          <div className="panel p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Enrolled Courses</h2>
            <div className="space-y-5">
              {enrolled.map(c => (
                <div key={c.id} className="">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-text-primary">{c.title}</p>
                    <span className="text-sm text-text-secondary">{c.progress}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${c.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
