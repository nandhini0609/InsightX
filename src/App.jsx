import './App.css'

function App() {
  return (
    <main className="login-page">
      <section className="login-hero" aria-label="InsightX overview">
        <div className="brand-mark" aria-hidden="true">
          <div className="brand-orb brand-orb-large" />
          <div className="brand-orb brand-orb-small" />
          <div className="analytics-card analytics-card-a">
            <span className="card-label">Revenue</span>
            <strong>12.5M</strong>
            <div className="mini-chart">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="analytics-card analytics-card-b">
            <span className="card-label">Growth</span>
            <strong>18.5%</strong>
            <div className="sparkline">
              <span />
            </div>
          </div>
          <div className="dashboard-grid" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">InsightX</p>
          <h1>Data Analytics Platform</h1>
          <p className="hero-text">
            Track performance, spot trends, and turn raw data into decisions from a
            single workspace.
          </p>
        </div>
      </section>

      <section className="auth-panel" aria-label="Sign in">
        <div className="auth-card">
          <div className="auth-header">
            <p className="welcome">Welcome Back</p>
            <p className="subtitle">Sign in to continue to your dashboard.</p>
          </div>

          <form className="login-form">
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" placeholder="name@company.com" />
            </label>

            <label className="field">
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter your password" />
            </label>

            <button type="submit" className="primary-button">
              Login
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="secondary-button">
              Continue with Google
            </button>

            <a href="#forgot-password" className="forgot-link">
              Forgot Password?
            </a>
          </form>
        </div>
      </section>
    </main>
  )
}

export default App
