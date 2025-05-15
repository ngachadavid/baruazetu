'use client';

import { useState } from 'react';

export default function SubmissionForm() {
  const [status, setStatus] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [showPseudonym, setShowPseudonym] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dfyaveghk/upload';
  const UPLOAD_PRESET = 'unsigned_upload';

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus('Uploading file...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        setFileUrl(data.secure_url);
        setStatus('File uploaded ✅');
      } else {
        throw new Error('No secure_url returned from Cloudinary');
      }
    } catch (err) {
      console.error('Cloudinary upload failed:', err);
      setStatus('File upload failed ❌');
    }
  };

  const handleAnonymityChange = (e) => {
    setShowPseudonym(e.target.value === 'pseudonym');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consentGiven) {
      setStatus('❌ Please provide consent before submitting.');
      return;
    }

    setStatus('Submitting form...');
    const formData = new FormData(e.target);
    if (fileUrl) {
      formData.append('file_url', fileUrl);
    }

    try {
      const res = await fetch('https://formspree.io/f/mrbqrzkk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('Form submitted successfully 🎉');
        e.target.reset();
        setFileUrl('');
        setShowPseudonym(false);
        setConsentGiven(false);
      } else {
        const errData = await res.json();
        console.error('Formspree error:', errData);
        setStatus('Formspree error ❌');
      }
    } catch (err) {
      console.error('Form submission failed:', err);
      setStatus('Submission failed ❌');
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-4 boer rounded space-y-6 show">
      <div>
        <label className="block mb-1 text-sm md:text-lg">Full Name</label>
        <input type="text" name="name" className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 text-sm md:text-lg">Email</label>
        <input type="email" name="_replyto" required className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-2 font-medium text-sm md:text-lg">Would you like your submission to be anonymous? *</label>
        <div className="space-y-2 text-xs md:text-base">
          <label>
            <input type="radio" name="anonymity" value="yes" required onChange={handleAnonymityChange} />
            {' '}Yes, keep me anonymous
          </label><br />
          <label>
            <input type="radio" name="anonymity" value="no" onChange={handleAnonymityChange} />
            {' '}No, you can use my name
          </label><br />
          <label>
            <input type="radio" name="anonymity" value="pseudonym" onChange={handleAnonymityChange} />
            {' '}Use a pseudonym (please specify below)
          </label>
          {showPseudonym && (
            <input type="text" name="pseudonym" placeholder="Enter pseudonym" className="w-full mt-2 p-2 border rounded" />
          )}
        </div>
      </div>

      <div>
        <label className="block mb-1 text-sm md:text-lg">Title / Role</label>
        <input type="text" name="role" placeholder="e.g., student, activist..." className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-2 font-medium text-sm md:text-lg">What are the main themes of your submission? (Select all that apply) *</label>
        <div className="space-y-2 text-xs md:text-base">
          {[
            'Before the Protest',
            'During the Protest',
            'After the protests',
            'Loss and Love.',
            'The Awakening and the Descent.',
            'Power and Fear.',
            'Promise',
            'Regret',
            'What we used to ignore/What we cannot ignore anymore.'
          ].map((theme, i) => (
            <label key={i} className="block">
              <input type="checkbox" name="themes[]" value={theme} /> {theme}
            </label>
          ))}
          <label className="block">
            <input type="checkbox" name="themes[]" value="Other" /> Other:
            <input type="text" name="theme_other" placeholder="Specify other" className="w-full mt-1 p-2 border rounded" />
          </label>
        </div>
      </div>

      <div>
  <label className="block mb-1 font-medium text-sm md:text-lg">File Upload</label>

  <div className="relative w-full">
    <input
      type="file"
      id="upload"
      onChange={handleFileChange}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
    <label
      htmlFor="upload"
      className="flex items-center justify-center w-full p-3 border border-dashed rounded bg-white text-gray-700 cursor-pointer hover:bg-gray-100 transition"
    >
      📎 Click to upload a file
    </label>
  </div>

  {fileUrl && (
    <p className="text-sm text-green-600 mt-2">
      Uploaded ✅ — <a href={fileUrl} target="_blank" rel="noreferrer" className="underline">View file</a>
    </p>
  )}
</div>


      <div>
        <label className="block font-medium mb-2 text-sm md:text-lg">Consent *</label>
        <div className="space-x-2">
          <input
            type="checkbox"
            required
            checked={consentGiven}
            onChange={() => setConsentGiven(!consentGiven)}
          />
          <span className="text-xs md:text-base">
            I give permission for my submission to be included in the Barua Zetu – A Memory Project archives and future exhibitions, publications, or educational materials (credited or anonymous based on my choices above). Barua-Zetu will not use my story for any commercial purposes. In all permitted uses, the owner and/or writer of the story will be appropriately credited, unless I have chosen to remain anonymous. By submitting your story, you confirm that you understand and agree to these terms.
          </span>
        </div>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
    </div>
  );
}
