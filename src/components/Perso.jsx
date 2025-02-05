import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perso.css';

export default function Perso() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([
    { id: 1, name: 'File1' },
    { id: 2, name: 'File2' },
    { id: 3, name: 'File3' }
  ]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      navigate('/login'); 
    }
  }, [navigate]);

  const handleSelectFile = (fileId) => {
    if (selectedFiles.includes(fileId)) {
      setSelectedFiles(selectedFiles.filter(id => id !== fileId));
    } else {
      setSelectedFiles([...selectedFiles, fileId]);
    }
  };

  return (
    <div className="perso-container">
      <h1 className="perso-title">Perso Center</h1>
      <table className="perso-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>File Name</th>
            <th>File ID</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedFiles.includes(file.id)}
                  onChange={() => handleSelectFile(file.id)}
                />
              </td>
              <td>{file.name}</td>
              <td>{file.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
