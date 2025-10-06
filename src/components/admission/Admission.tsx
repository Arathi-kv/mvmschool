import React from 'react';

const Admission = () => {
  return (
    <div className="it-team-details__area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-10">
            <div className="it-team-details__text-box pb-30">
              <h4 className="postbox__details-title">Admission Guidelines</h4>
              <ul>
                <li>All admission are strictly based on admission test except K.G admission.</li>
                <li>Pupil should produce their T.C at the time of admission.</li>
                <li>K.G and first standard pupil should produce their birth certificate at the time of admission.</li>
                <li>All admissions are provisional but principal has a right to cancel any admission at any time.</li>
                <li>Higher secondary admission will start only after publishing SSLC result as per government notification.</li>
              </ul>
              <p>
                കുട്ടികൾ സ്വയം പര്യാപ്തരായി വെല്ലുവിളികളെ അതിജീവിച്ചു വളരാൻ നൂതന കാലത്തിന്റെ വിദ്യാഭ്യാസം ഇനി സ്കൂൾ ഒന്നിച്ച് നിങ്ങളുടെ പഠന മുറിയിലേക്ക്.
              </p>

              <br />
              <h4 className="postbox__details-title">Special Features</h4>
              <ul>
                <li>📝 കേം ബ്രിഡ്ജ് ഇംഗ്ളീഷ് പരിശീലന പരിപാടി.</li>
                <li>💡 Special Coaching for NTSC & ISRO Young Scientist Program</li>
                <li>🦾 റോബോട്ടിക്‌സ് പാഠ്യ പദ്ധതി.</li>
                <li>🧮 ഇ-ക്യാമ്പസ്, ഐഡിയ ഫാക്ടറി തുടങ്ങിയ അന്താരാഷ്ട്ര സംവിധാനങ്ങൾ.</li>
                <li>🔖 ധാർമികതയിൽ അധിഷ്ഠിതമായ റസിഡൻഷ്യൽ ക്യാമ്പസ്.</li>
                <li>💸 NO DONATION</li>
                <li>💡 MVM EMBEDDED EDU APP</li>
                <li>🎈 IAS Orientation</li>
              </ul>

              <br />
              <h4 className="postbox__details-title">Hostel Admission Procedure</h4>
              <ul>
                <li>Who want hostel admission they want to submit an application in prescribed form in our school office.</li>
                <li>If any pupil violate the rules and regulations of school, that pupil both admission may be cancelled at any time.</li>
                <li>Hostel admission available from 5th standard onwards.</li>
                <li>Separate hostel for both boys and girls are functioning in the campus. Special coaching programme are arranged for hostel student for physical, cultural and moral development of the pupil. The hostel mess is non-vegetarian; in no case outside food is allowed.</li>
                <li>The parents are allowed to visit their ward in the hostel only on holidays.</li>
              </ul>

              <br />
              {/* Contact Section */}
              <h4 className="postbox__details-title">For more details</h4>
              <p>
                <strong>Dept.of Al-Manar:</strong> <a href="tel:+919895413809">9895413809</a><br />
                <strong>Others:</strong> <a href="tel:+919567871424">9567871424</a>, <a href="tel:+917593078368">7593078368</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
