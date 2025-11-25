import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => {
  const currentDate = new Date().toLocaleString();

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-5 rounded-lg">
      <div className="bg-white rounded-lg p-10 max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-4 border-purple-600">
          <h1 className="m-0 text-purple-600 text-3xl font-bold">New Inquiry Received!</h1>
          <p className="mt-2 text-gray-600 text-sm">From Your Portfolio Contact Form</p>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-gray-900 text-2xl font-bold mb-4">Contact Details</h2>
          
          <div className="bg-gray-50 p-4 border-l-4 border-purple-600 rounded mb-4">
            <p className="my-2 text-gray-900">
              <strong>Name:</strong> <span className="text-purple-600">{name}</span>
            </p>
            <p className="my-2 text-gray-900">
              <strong>Email:</strong>{' '}
              <a 
                href={`mailto:${email}`} 
                className="text-purple-600 no-underline hover:underline"
              >
                {email}
              </a>
            </p>
          </div>

          <h3 className="text-gray-900 text-lg font-semibold mt-6 mb-3">Message</h3>
          <div className="bg-gray-50 p-5 rounded border-l-4 border-purple-600 leading-relaxed text-gray-700 whitespace-pre-wrap">
            {message}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-5 border-t border-gray-200">
          <p className="my-2 text-gray-600 text-sm font-semibold">Quick Action:</p>
          <a 
            href={`mailto:${email}`}
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded no-underline font-bold hover:shadow-lg transition-shadow"
          >
            Reply to {name}
          </a>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-5 pt-4 border-t border-gray-200">
          <p className="m-0 text-gray-400 text-xs">Received on {currentDate}</p>
        </div>

      </div>
    </div>
  );
};

export default EmailTemplate;
