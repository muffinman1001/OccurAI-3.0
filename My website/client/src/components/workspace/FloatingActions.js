import React from 'react';
import { Plus, ZoomIn, ZoomOut } from 'react-feather';
import '../../styles/FloatingActions.css';

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      <button className="action-button primary">
        <Plus />
      </button>
      <button className="action-button">
        <ZoomIn />
      </button>
      <button className="action-button">
        <ZoomOut />
      </button>
    </div>
  );
};

export default FloatingActions; 