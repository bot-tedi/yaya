import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  label = '', 
  showPercentage = true, 
  showValue = false,
  color = 'blue',
  size = 'md',
  animated = true,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-600',
    pink: 'bg-pink-600'
  };

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-6'
  };

  const bgColorClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    red: 'bg-red-100',
    yellow: 'bg-yellow-100',
    purple: 'bg-purple-100',
    pink: 'bg-pink-100'
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label and Value */}
      {(label || showValue || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-700">
              {label}
            </span>
          )}
          <div className="flex items-center space-x-2">
            {showValue && (
              <span className="text-sm text-gray-600">
                {displayValue.toLocaleString('id-ID')}
              </span>
            )}
            {showPercentage && (
              <span className="text-sm font-medium text-gray-700">
                {percentage.toFixed(1)}%
              </span>
            )}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className={`w-full ${bgColorClasses[color]} ${sizeClasses[size]} rounded-full overflow-hidden`}>
        <motion.div
          className={`h-full ${colorClasses[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: animated ? 1.5 : 0, 
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
