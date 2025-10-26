import React, { useState } from 'react';
import './TimestampExtractor.css';

const TimestampExtractor = () => {
  const [timestamp, setTimestamp] = useState('');
  const [extractedInfo, setExtractedInfo] = useState(null);

  const handleTimestampChange = (e) => {
    setTimestamp(e.target.value);
  };

  const extractTimestampInfo = () => {
    if (!timestamp) {
      alert('Please enter a timestamp');
      return;
    }

    const date = new Date(timestamp);
    
    if (isNaN(date.getTime())) {
      alert('Invalid timestamp format');
      return;
    }

    const info = {
      fullDate: date.toLocaleDateString(),
      fullTime: date.toLocaleTimeString(),
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
      monthName: date.toLocaleDateString('en-US', { month: 'long' }),
      unixTimestamp: Math.floor(date.getTime() / 1000)
    };

    setExtractedInfo(info);
  };

  const clearAll = () => {
    setTimestamp('');
    setExtractedInfo(null);
  };

  return (
    <div className="timestamp-extractor">
      <div className="timestamp-container">
        <h2>Timestamp Extractor</h2>
        <div className="input-section">
          <label htmlFor="timestamp-input">Enter a timestamp:</label>
          <input
            id="timestamp-input"
            type="text"
            value={timestamp}
            onChange={handleTimestampChange}
            placeholder="e.g., 2024-01-15T10:30:00 or Jan 15, 2024 10:30:00"
            className="timestamp-input"
          />
          <div className="button-group">
            <button className="btn btn-extract" onClick={extractTimestampInfo}>
              Extract Info
            </button>
            <button className="btn btn-clear" onClick={clearAll}>
              Clear
            </button>
          </div>
        </div>

        {extractedInfo && (
          <div className="extracted-info">
            <h3>Extracted Information:</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Full Date:</span>
                <span className="info-value">{extractedInfo.fullDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Full Time:</span>
                <span className="info-value">{extractedInfo.fullTime}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year:</span>
                <span className="info-value">{extractedInfo.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Month:</span>
                <span className="info-value">{extractedInfo.monthName} ({extractedInfo.month})</span>
              </div>
              <div className="info-item">
                <span className="info-label">Day:</span>
                <span className="info-value">{extractedInfo.day}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Day of Week:</span>
                <span className="info-value">{extractedInfo.dayOfWeek}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Hour:</span>
                <span className="info-value">{extractedInfo.hour}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Minute:</span>
                <span className="info-value">{extractedInfo.minute}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Second:</span>
                <span className="info-value">{extractedInfo.second}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Unix Timestamp:</span>
                <span className="info-value">{extractedInfo.unixTimestamp}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimestampExtractor;
