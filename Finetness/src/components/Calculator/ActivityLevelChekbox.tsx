import { useState } from 'react';

interface ActivityLevelProps {
  checkboxes: string[];
}

const ActivityLevelCheckbox: React.FC<ActivityLevelProps> = ({ checkboxes }) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
  
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedCheckbox(event.target.value);
    };
  
    return (
      <div className="text-sm font-semibold leading-6 text-gray-900">
        {checkboxes.map((checkbox) => (
          <label key={checkbox}>
          <legend></legend>
            <input
              type="checkbox"
              value={checkbox}
              checked={selectedCheckbox === checkbox}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            
            {checkbox}
          </label>
        ))}
      </div>
    );
  };
  
export default ActivityLevelCheckbox  