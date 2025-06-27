import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отобразить резервный UI
      return <h2>Упс! Что-то пошло не так.</h2>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;


// отформотировать позже