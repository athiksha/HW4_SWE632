import React, { useState } from 'react';

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showUploadOption, setShowUploadOption] = useState(false);
  const [showSubmitEssayOption, setShowSubmitEssayOption] = useState(false);
  const [showAddHomeworkOption, setShowAddHomeworkOption] = useState(false);


  const [submitted, setSubmitted] = useState(false);
  const [marks, setMarks] = useState(null);
  const [essayAnswer, setEssayAnswer] = useState('');
  const [comment, setComment] = useState('');

  const [formSubmissions, setFormSubmissions] = useState([]);


  const [formData, setFormData] = useState({
    homeworkName: '',
    courseName: '',
    gradingCriteria: []

  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'select-multiple') {
      // For multi-select
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData({
        ...formData,
        [name]: selectedOptions
      });
    } else {
      // For other input types
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current form data to the array of form submissions
    setFormSubmissions([...formSubmissions, formData]);
    // Reset the form fields after submission
    setFormData({
      homeworkName: '',
      courseName: '',
      gradingCriteria: []
    });
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === 'Upload Homework') {
      setShowUploadOption(true);
      setShowSubmitEssayOption(false);
      setShowAddHomeworkOption(false);

    } else if (option === "Add Homework") {
      setShowUploadOption(false);
      setShowSubmitEssayOption(false);
      setShowAddHomeworkOption(true);
    } else {
      setShowUploadOption(false);
      setShowSubmitEssayOption(true);
      setShowAddHomeworkOption(false);
    }
  };

  const handleSubmission = () => {
    // Simulating a random score between 6 to 10
    const score = Math.floor(Math.random() * 5) + 6;
    setMarks(score);
    setSubmitted(true);
  };

  const handleEssayChange = (event) => {
    setEssayAnswer(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const renderFunctionality = () => {
    switch (selectedOption) {
      case 'Add Homework':
        return (
          <div>
            <p className="functionality">Professors can add homework and view the list of homeworks</p>
            {showAddHomeworkOption && (
              <div>
                <h2>Add Homework</h2>
                <form onSubmit={handleSubmit} className="custom-form" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>
                  <div className="form-group">
                    <label htmlFor="homeworkName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="homeworkName" name="homeworkName" value={formData.homeworkName} onChange={handleChange} style={{ marginBottom: '10px', width: '100%' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="courseName" className="form-label">Course Name</label>
                    <input type="text" className="form-control" id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} style={{ marginBottom: '10px', width: '100%' }} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gradingCriteria" className="form-label">Grading Criteria</label>
                    <select multiple className="form-control" id="gradingCriteria" name="gradingCriteria" value={formData.gradingCriteria} onChange={handleChange} style={{ marginBottom: '10px', width: '100%' }}>
                      <option value="Correctness">Correctness</option>
                      <option value="Completeness">Completeness</option>
                      <option value="Style">Style</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="homeworkFile" className="form-label">Homework File</label>
                    <input type="file" accept=".pdf,.docx" style={{ marginBottom: '10px', width: '100%' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="homeworkKey" className="form-label">Homework Key</label>
                    <input type="file" accept=".pdf,.docx" style={{ marginBottom: '10px', width: '100%' }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '50%' }}>Submit</button>
                </form>
                <h2>Homeworks</h2>


                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                  <thead style={{ backgroundColor: '#f2f2f2' }}>
                    <tr>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Course Name</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Grading Criteria</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Homework File</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Homework Key</th>

                    </tr>
                  </thead>
                  <tbody>
                    {formSubmissions.map((submission, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{submission.homeworkName}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{submission.courseName}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{submission.gradingCriteria.join(', ')}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                          <a href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf" download>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png" alt="Download" style={{ width: '24px', height: '30px' }} />
                          </a>
                        </td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                          <a href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf" download>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png" alt="Download" style={{ width: '24px', height: '30px' }} />
                          </a>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>


              </div>
            )}
          </div>
        );
      case 'Upload Homework':
        return (
          <div>
            <p className="functionality">Students can upload their homework submissions by browsing or drag and drop.</p>
            {showUploadOption && (

              <div>
                <h2>Choose a Homework</h2>
                <select>
                  <option value="">Select a Homework</option>
                  {formSubmissions.map((submission, index) => (
                    <option key={index} value={index}>{submission.homeworkName}</option>
                  ))}
                </select>
                <br></br>
                <br></br>

                Your Homework File: <input type="file" accept=".pdf,.docx" />
                <textarea placeholder="Leave your comments here..." value={comment} onChange={handleCommentChange} rows="4" cols="50"></textarea>
              </div>
            )}
          </div>
        );
      case 'Submit Essays':
        return (
          showSubmitEssayOption && (
            <div>
              <p className="functionality">Students can submit their essays for grading.</p>
              <textarea placeholder="Write your essay here..." value={essayAnswer} onChange={handleEssayChange} rows="8" cols="50"></textarea>
              <textarea placeholder="Leave your comments here..." value={comment} onChange={handleCommentChange} rows="4" cols="50"></textarea>
            </div>
          ));
      default:
        return null;
    }
  };

  const renderSubmissionButton = () => {
    if (selectedOption === 'Submit Essays' || selectedOption === 'Upload Homework') {
      return <button className="submit-button" onClick={handleSubmission}>Submit</button>;
    }
    return null;
  };

  const renderFeedback = () => {
    if (submitted && marks !== null) {
      let feedback;
      if (marks >= 9) {
        feedback = "Excellent work! Your submission was outstanding.";
      } else if (marks >= 7) {
        feedback = "Good job! Your submission met expectations.";
      } else {
        feedback = "Your submission needs improvement. Here are some suggestions...";
      }
      return (
        <div className="feedback">
          <p>Marks: {marks}/10</p>
          <p>Feedback: {feedback}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="landing-page-container">
      <h1>Welcome to the AI Homework Grader</h1>
      <p className="description">
        This AI-powered Homework Grader helps you grade your homework submissions automatically.<br />
        Simply upload your PDF or DOCX files, and the AI will generate a score and provide feedback.
      </p>

      <div className="instructions">
        <ol>
          <ui>Click on one of the options below:</ui>
        </ol>
      </div>
      <div className="button-container">
        <button className={`option-button ${selectedOption === 'Add Homework' ? 'selected' : ''}`} onClick={() => handleOptionClick('Add Homework')}>Professor - Add Homework</button>
        <button className={`option-button ${selectedOption === 'Upload Homework' ? 'selected' : ''}`} onClick={() => handleOptionClick('Upload Homework')}>Student - Upload Homework</button>
        <button className={`option-button ${selectedOption === 'Submit Essays' ? 'selected' : ''}`} onClick={() => handleOptionClick('Submit Essays')}>Student - Submit Essays</button>
      </div>
      <div className="functionality-container">
        {renderFunctionality()}
        {renderSubmissionButton()}
        {renderFeedback()}
      </div>
    </div>
  );
};

export default LandingPage;
