import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import './Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [counters, setCounters] = useState({
    activeResearch: 0,
    plasticRecycled: 0,
    innovations: 0,
    studentsEnrolled: 0,
  });

  useEffect(() => {
    // Animate counters
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: current }));
      }, 20);
    };

    setTimeout(() => {
      animateCounter(12, 'activeResearch');
      animateCounter(2.4, 'plasticRecycled');
      animateCounter(8, 'innovations');
      animateCounter(156, 'studentsEnrolled');
    }, 500);
  }, []);

  const switchTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const showNotification = () => {
    alert('🚀 Ready to launch a new environmental research initiative!');
  };

  const progressChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Research Projects',
        data: [2, 4, 6, 8, 10, 12, 14, 15],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: 'Patent Applications',
        data: [0, 1, 2, 3, 5, 6, 7, 8],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const progressChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    plugins: {
      legend: {
        labels: {
          color: '#94a3b8',
          font: {
            size: 12,
            weight: 600 as const,
          },
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(59, 130, 246, 0.1)',
        },
        ticks: {
          color: '#94a3b8',
          font: {
            weight: 600 as const,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(59, 130, 246, 0.1)',
        },
        ticks: {
          color: '#94a3b8',
          font: {
            weight: 600 as const,
          },
        },
      },
    },
  };

  const recyclingChartData = {
    labels: ['PET Bottles', 'HDPE Containers', 'PVC Materials', 'LDPE Films', 'PP Products', 'PS Packaging'],
    datasets: [
      {
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.9)',
          'rgba(34, 197, 94, 0.9)',
          'rgba(168, 85, 247, 0.9)',
          'rgba(249, 115, 22, 0.9)',
          'rgba(236, 72, 153, 0.9)',
          'rgba(251, 191, 36, 0.9)',
        ],
        borderColor: '#1e293b',
        borderWidth: 2,
      },
    ],
  };

  const recyclingChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#94a3b8',
          padding: 15,
          font: {
            size: 11,
            weight: 600 as const,
          },
          usePointStyle: true,
        },
      },
    },
  };

  const projects = [
    {
      title: 'Biodegradable Plastic Alternatives',
      subtitle: 'Multidisciplinary Research Initiative',
      status: 'active',
      description: 'Developing eco-friendly alternatives to traditional plastics using agricultural waste and bio-polymers. Integrates Chemistry, Biology, and Engineering disciplines.',
      students: ['Ananya Sharma', 'Rahul Patel', 'Priya Singh', '+4 more'],
      progress: 78,
    },
    {
      title: 'AI-Powered Waste Sorting System',
      subtitle: 'Technology Integration Project',
      status: 'review',
      description: 'Machine learning system for automated plastic waste categorization. Combines Computer Science, Environmental Science, and Mechanical Engineering.',
      students: ['Arjun Kumar', 'Sneha Reddy', 'Vikram Joshi'],
      progress: 92,
    },
    {
      title: 'Ocean Plastic Recovery Drone',
      subtitle: 'Innovation Challenge Winner',
      status: 'completed',
      description: 'Autonomous drone system for collecting plastic waste from ocean surfaces. Winner of National Innovation Challenge 2024.',
      students: ['Meera Gupta', 'Karan Malhotra', 'Deepika Rao', '+2 more'],
      progress: 100,
    },
    {
      title: 'Community Plastic Upcycling Hub',
      subtitle: 'Social Entrepreneurship Initiative',
      status: 'active',
      description: 'Creating sustainable business models for community-based plastic recycling. Integrates Business Studies, Environmental Science, and Social Work.',
      students: ['Aarti Nair', 'Rohit Verma', 'Kavya Menon', '+6 more'],
      progress: 65,
    },
    {
      title: 'Microplastics Detection Kit',
      subtitle: 'Health & Environment Research',
      status: 'active',
      description: 'Developing affordable kits for detecting microplastics in water bodies. Combines Chemistry, Biology, and Public Health studies.',
      students: ['Siddharth Iyer', 'Pooja Jain', 'Nikhil Das'],
      progress: 43,
    },
    {
      title: 'Plastic-to-Fuel Conversion Plant',
      subtitle: 'Energy Recovery Initiative',
      status: 'review',
      description: 'Pilot plant for converting plastic waste into usable fuel. Multidisciplinary approach involving Chemical Engineering, Environmental Science, and Economics.',
      students: ['Aditya Sharma', 'Ritu Agarwal', 'Manish Khanna', '+5 more'],
      progress: 87,
    },
  ];

  const students = [
    { avatar: 'AS', name: 'Ananya Sharma', department: 'Environmental Engineering', research: 92, innovation: 88, publications: 5, status: 'Outstanding' },
    { avatar: 'RP', name: 'Rahul Patel', department: 'Chemical Engineering', research: 88, innovation: 92, publications: 3, status: 'Excellent' },
    { avatar: 'PS', name: 'Priya Singh', department: 'Biotechnology', research: 95, innovation: 90, publications: 7, status: 'Outstanding' },
    { avatar: 'AK', name: 'Arjun Kumar', department: 'Computer Science', research: 85, innovation: 95, publications: 4, status: 'Excellent' },
    { avatar: 'SR', name: 'Sneha Reddy', department: 'Environmental Science', research: 90, innovation: 87, publications: 6, status: 'Outstanding' },
    { avatar: 'MG', name: 'Meera Gupta', department: 'Mechanical Engineering', research: 87, innovation: 91, publications: 4, status: 'Excellent' },
  ];

  const nepFeatures = [
    { icon: '🔬', title: 'Multidisciplinary Approach', description: 'Integration of Chemistry, Biology, Engineering, Computer Science, and Social Sciences in environmental research projects.' },
    { icon: '💡', title: 'Research-Based Learning', description: 'Students engage in original research from semester 1, contributing to real-world environmental solutions and innovations.' },
    { icon: '🌍', title: 'Global Perspective', description: 'International collaboration with universities and research institutions for comprehensive environmental education.' },
    { icon: '🤝', title: 'Industry Integration', description: 'Direct partnerships with environmental tech companies, NGOs, and government agencies for practical experience.' },
    { icon: '📚', title: 'Flexible Curriculum', description: 'Choice-based credit system allowing students to customize their learning path based on interests and career goals.' },
    { icon: '🎯', title: 'Skill Development', description: 'Focus on critical thinking, problem-solving, communication, and leadership skills alongside technical expertise.' },
    { icon: '📊', title: 'Continuous Assessment', description: 'Comprehensive evaluation system including research projects, presentations, peer reviews, and practical applications.' },
    { icon: '💻', title: 'Technology Integration', description: 'Use of AI, IoT, and digital tools in environmental monitoring, data analysis, and solution development.' },
  ];

  return (
    <div className="dashboard-container">
      <div className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="logo-container">
            <div style={{ fontSize: '2rem' }}>🌱</div>
          </div>
          <div>
            <h1>EcoQuest College Dashboard</h1>
          </div>
        </div>

        <div className="user-info">
          <div className="avatar">DK</div>
          <div>
            <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '1.1rem' }}>Dr. Kavitha</div>
            <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Environmental Engineering</div>
            <div style={{ color: '#3b82f6', fontSize: '0.85rem' }}>Department of Science & Technology</div>
          </div>
        </div>
      </div>

      <div className="tab-navigation">
        <div className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => switchTab('overview')}>
          📊 Overview
        </div>
        <div className={`tab ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => switchTab('projects')}>
          🔬 Research Projects
        </div>
        <div className={`tab ${activeTab === 'students' ? 'active' : ''}`} onClick={() => switchTab('students')}>
          👥 Students
        </div>
        <div className={`tab ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => switchTab('analytics')}>
          📈 Analytics
        </div>
        <div className={`tab ${activeTab === 'nep' ? 'active' : ''}`} onClick={() => switchTab('nep')}>
          🎓 NEP Framework
        </div>
      </div>

      {activeTab === 'overview' && (
        <div id="overview-tab">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon research-icon">🔬</div>
                <div>
                  <div className="stat-value">{Math.floor(counters.activeResearch)}</div>
                  <div className="stat-label">Active Research Projects</div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon project-icon">♻️</div>
                <div>
                  <div className="stat-value">{counters.plasticRecycled.toFixed(1)}k</div>
                  <div className="stat-label">kg Plastic Recycled</div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon innovation-icon">💡</div>
                <div>
                  <div className="stat-value">{Math.floor(counters.innovations)}</div>
                  <div className="stat-label">Patent Applications</div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon impact-icon">🌍</div>
                <div>
                  <div className="stat-value">{Math.floor(counters.studentsEnrolled)}</div>
                  <div className="stat-label">Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div className="chart-card">
              <div className="chart-title">📈 Research Progress Timeline</div>
              <Line data={progressChartData} options={progressChartOptions} />
            </div>
            <div className="chart-card">
              <div className="chart-title">🔄 Plastic Recycling Categories</div>
              <Doughnut data={recyclingChartData} options={recyclingChartOptions} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div id="projects-tab">
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div>
                    <div className="project-title">{project.title}</div>
                    <div className="project-subtitle">{project.subtitle}</div>
                  </div>
                  <div className={`project-status status-${project.status}`}>
                    {project.status === 'active' ? 'Active' : project.status === 'review' ? 'Under Review' : 'Completed'}
                  </div>
                </div>
                <div style={{ color: project.status === 'completed' ? '#94a3b8' : '#556b57', marginBottom: '15px', lineHeight: '1.6' }}>
                  {project.description}
                </div>
                <div className="student-list">
                  {project.students.map((student, sIndex) => (
                    <div key={sIndex} className="student-chip">{student}</div>
                  ))}
                </div>
                <div className="progress-section">
                  <div className="progress-label">
                    <span>{project.status === 'completed' ? 'Project Completion' : project.status === 'review' ? 'Development Progress' : 'Research Progress'}</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div id="students-tab">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            <div className="project-card">
              <div className="chart-title">🎓 Student Performance Dashboard</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '60px 2fr 1fr 1fr 1fr 1fr', gap: '15px', alignItems: 'center', padding: '15px 0', borderBottom: '2px solid rgba(113, 153, 121, 0.4)', fontWeight: 700, color: '#1a2e1b', marginBottom: '20px' }}>
                <div></div>
                <div>Student Details</div>
                <div>Research Score</div>
                <div>Innovation Index</div>
                <div>Publications</div>
                <div>Status</div>
              </div>

              {students.map((student, index) => (
                <div key={index} style={{ display: 'grid', gridTemplateColumns: '60px 2fr 1fr 1fr 1fr 1fr', gap: '15px', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid rgba(113, 153, 121, 0.2)', transition: 'all 0.3s ease' }}>
                  <div className="avatar" style={{ width: '45px', height: '45px', fontSize: '1.1rem' }}>{student.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1a2e1b', fontSize: '1rem' }}>{student.name}</div>
                    <div style={{ color: '#556b57', fontSize: '0.85rem' }}>{student.department}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: '1.1rem' }}>{student.research}%</div>
                  <div style={{ fontWeight: 700, color: '#3b82f6', fontSize: '1.1rem' }}>{student.innovation}%</div>
                  <div style={{ fontWeight: 700, color: '#a855f7', fontSize: '1.1rem' }}>{student.publications}</div>
                  <div className={`project-status ${student.status === 'Outstanding' ? 'status-active' : 'status-review'}`}>
                    {student.status}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="stat-card" style={{ marginBottom: '20px' }}>
                <div className="stat-header">
                  <div className="stat-icon research-icon">📚</div>
                  <div>
                    <div className="stat-value">23</div>
                    <div className="stat-label">Total Publications</div>
                  </div>
                </div>
              </div>

              <div className="stat-card" style={{ marginBottom: '20px' }}>
                <div className="stat-header">
                  <div className="stat-icon project-icon">🏆</div>
                  <div>
                    <div className="stat-value">15</div>
                    <div className="stat-label">Awards Won</div>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon innovation-icon">💰</div>
                  <div>
                    <div className="stat-value">₹12.5L</div>
                    <div className="stat-label">Scholarships Awarded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div id="analytics-tab">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon impact-icon">🌿</div>
                <div>
                  <div className="stat-value">15.7</div>
                  <div className="stat-label">Tons CO₂ Reduced</div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon project-icon">💰</div>
                <div>
                  <div className="stat-value">₹2.1M</div>
                  <div className="stat-label">Research Funding</div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon research-icon">🤝</div>
                <div>
                  <div className="stat-value">12</div>
                  <div className="stat-label">Industry Partnerships</div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon innovation-icon">🎯</div>
                <div>
                  <div className="stat-value">94%</div>
                  <div className="stat-label">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card" style={{ marginTop: '30px' }}>
            <div className="chart-title">📈 Comprehensive Analytics Dashboard</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div style={{ fontSize: '2rem', color: '#3b82f6', fontWeight: 800 }}>2.4k</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 600 }}>kg Plastic Recycled</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '16px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <div style={{ fontSize: '2rem', color: '#22c55e', fontWeight: 800 }}>156</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 600 }}>Active Students</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <div style={{ fontSize: '2rem', color: '#a855f7', fontWeight: 800 }}>23</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 600 }}>Publications</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '16px', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                <div style={{ fontSize: '2rem', color: '#f97316', fontWeight: 800 }}>8</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 600 }}>Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'nep' && (
        <div id="nep-tab">
          <div className="project-card">
            <div className="chart-title">🎓 NEP 2020 Framework Implementation</div>
            <div style={{ color: '#94a3b8', margin: '20px 0', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Our Environmental Engineering program is designed in full compliance with NEP 2020 guidelines, emphasizing multidisciplinary learning, research-based education, and holistic development.
            </div>

            <div className="nep-features">
              {nepFeatures.map((feature, index) => (
                <div key={index} className="nep-feature">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
            <div className="project-card">
              <div className="chart-title">📋 NEP Compliance Checklist</div>
              <div style={{ marginTop: '20px' }}>
                {['Multidisciplinary Programs', 'Research Integration', 'Choice-Based Credits', 'Industry Partnerships'].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', padding: '10px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                    <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>✅</span>
                    <span style={{ color: '#e2e8f0' }}>{item}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', padding: '10px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
                  <span style={{ color: '#f97316', fontSize: '1.2rem' }}>🔄</span>
                  <span style={{ color: '#e2e8f0' }}>Digital Infrastructure Enhancement</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="chart-title">🎯 Learning Outcomes</div>
              <div style={{ marginTop: '20px' }}>
                {[
                  { label: 'Research Skills', value: 92 },
                  { label: 'Technical Proficiency', value: 88 },
                  { label: 'Innovation Capability', value: 85 },
                  { label: 'Communication Skills', value: 90 },
                ].map((outcome, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: '#94a3b8', fontWeight: 600 }}>{outcome.label}</span>
                      <span style={{ color: '#22c55e', fontWeight: 700 }}>{outcome.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${outcome.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="floating-action" onClick={showNotification}>
        🚀
      </div>
    </div>
  );
};

export default Dashboard;