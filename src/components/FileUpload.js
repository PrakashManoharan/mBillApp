import React from 'react';

const FileUpload = () => {
  return (
    <form>
      <div>
        <label htmlFor="date">Date </label>
        <input type="text" />
      </div>

      <div>
        <button className="bg-secondary">
          <input type="file" />
          <i className="text-light fas fa-file-upload" />
        </button>
      </div>
    </form>
  );
};

export default FileUpload;
