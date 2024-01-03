import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Load existing submissions from JSON file on component mount
    const fetchData = async () => {
      try {
        const response = await fetch("/path/to/submissions.json");
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Error loading submissions:", error);
      }
    };

    fetchData();
  }, []); // Run only on component mount

  const handleFormSubmit = (formData) => {
    // Save the new submission to state and JSON file
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    setSubmissions([...submissions, newSubmission]);

    // Save to JSON file
    saveToJsonFile([...submissions, newSubmission]);
  };

  const saveToJsonFile = async (data) => {
    try {
      const response = await fetch("/path/to/save/submissions.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Submission saved successfully.");
      } else {
        console.error("Error saving submission:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving submission:", error);
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactMe;
