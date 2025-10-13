import React from 'react';
import AdmissionForm from '@/components/form/AdmissionForm';

const Admission = () => {
  return (
    <div className="admission-page pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Admission Guidelines */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Admission Guidelines</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All admission are strictly based on admission test except K.G admission.</li>
              <li>Pupil should produce their T.C at the time of admission.</li>
              <li>K.G and first standard pupil should produce their birth certificate at the time of admission.</li>
              <li>All admissions are provisional but principal has a right to cancel any admission at any time.</li>
              <li>Higher secondary admission will start only after publishing SSLC result as per government notification.</li>
            </ul>
          </div>

          {/* Special Features */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Special Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>📝 കേം ബ്രിഡ്ജ് ഇംഗ്ളീഷ് പരിശീലന പരിപാടി.</li>
              <li>💡 Special Coaching for NTSC & ISRO Young Scientist Program</li>
              <li>🦾 റോബോട്ടിക്‌സ് പാഠ്യ പദ്ധതി.</li>
              <li>🧮 ഇ-ക്യാമ്പസ്, ഐഡിയ ഫാക്ടറി തുടങ്ങിയ അന്താരാഷ്ട്ര സംവിധാനങ്ങൾ.</li>
              <li>🔖 ധാർമികതയിൽ അധിഷ്ഠിതമായ റസിഡൻഷ്യൽ ക്യാമ്പസ്.</li>
              <li>💸 NO DONATION</li>
              <li>💡 MVM EMBEDDED EDU APP</li>
              <li>🎈 IAS Orientation</li>
            </ul>
          </div>

          {/* Hostel Procedure */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Hostel Admission Procedure</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Who want hostel admission they want to submit an application in prescribed form in our school office.</li>
              <li>If any pupil violate the rules and regulations of school, that pupil both admission may be cancelled at any time.</li>
              <li>Hostel admission available from 5th standard onwards.</li>
              <li>Separate hostel for both boys and girls are functioning in the campus. Special coaching programme are arranged for hostel student for physical, cultural and moral development of the pupil. The hostel mess is non-vegetarian; in no case outside food is allowed.</li>
              <li>The parents are allowed to visit their ward in the hostel only on holidays.</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For more details</h2>
            <p>
              <strong>Dept.of Al-Manar:</strong> <a href="tel:+919895413809" className="text-blue-600 underline">9895413809</a><br />
              <strong>Others:</strong> <a href="tel:+919567871424" className="text-blue-600 underline">9567871424</a>, <a href="tel:+917593078368" className="text-blue-600 underline">7593078368</a>
            </p>
          </div>
          {/* Admission Form */}
            <div className="container" style={{ marginTop: "50px" }}>
          <div className="it-contact__form-box p-4 shadow-sm bg-white rounded-3">
            <h3 className="it-section-title mb-3">Online Admission Form</h3>
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Admission;
