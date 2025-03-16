import React, { Suspense } from 'react';
import Navbar from '../Homepagecomponents/Navbar';
import Footer from '../Homepagecomponents/Footer';
import Chatbot from '../Homepagecomponents/Chatbot';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Layout Error:', {
      error: error,
      componentStack: errorInfo.componentStack,
      message: error.message,
      stack: error.stack
    });
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container text-center py-5">
          <h2>Something went wrong</h2>
          <details className="mt-3 text-start mx-auto" style={{ maxWidth: '600px' }}>
            <summary className="btn btn-outline-danger">Show Error Details</summary>
            <pre className="mt-3 p-3 bg-light rounded">
              <code>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </code>
            </pre>
          </details>
          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              console.log('Attempting recovery...');
              this.setState({ hasError: false, error: null, errorInfo: null });
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner = () => (
  <div className="loading-container d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function Layout({ children }) {
  return (
    <ErrorBoundary>
      <div className="layout-container min-vh-100 d-flex flex-column">
        <header>
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
          </Suspense>
        </header>

        <main className="flex-grow-1">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </main>

        <footer>
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </footer>

        <div className="chatbot-container">
          <Suspense fallback={<LoadingSpinner />}>
            <Chatbot />
          </Suspense>
        </div>
      </div>

      <style>
        {`
          .layout-container {
            position: relative;
          }

          .chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
          }

          .error-container {
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin: 2rem;
          }

          .loading-container {
            background-color: rgba(255, 255, 255, 0.8);
          }

          @media (max-width: 768px) {
            .chatbot-container {
              bottom: 10px;
              right: 10px;
            }
          }
        `}
      </style>
    </ErrorBoundary>
  );
}

export default Layout;