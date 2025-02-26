import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Contact Details Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-400" />
              <span>support@expensetracker.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-3 text-blue-400" />
              <span>+91 (123) 456-7890</span>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-3 mt-1 text-blue-400" />
              <span>
                123 Expense Street,
                Financial District,
                Tech City, 
                State 12345,
                India
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links or Additional Information */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Support</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p>&copy; 2025 Expense Tracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
}