import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPrivacy = () => {
  return (
    <div className="min-h-screen bg-wyz-50 font-sans text-gray-800">
       {/* Navbar */}
      <nav className="bg-wyz-900 text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <NavLink to="/" className="flex items-center">
            <img 
              src="https://github.com/user-attachments/assets/c505307b-8919-482f-87d2-777b752496d0" 
              alt="WYZReview" 
              className="h-8 w-auto" 
            />
        </NavLink>
        <div className="flex items-center space-x-4">
            <NavLink to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
                <ArrowLeft size={16} className="mr-1" /> Back
            </NavLink>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl font-extrabold text-wyz-900 mb-8 border-b border-gray-100 pb-8">Terms of Service</h1>

            <div className="space-y-8 text-gray-600 leading-relaxed">
                
                {/* Meta Info */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-sm">
                    <p className="mb-1"><span className="font-bold text-gray-900">Effective Date:</span> January 10, 2026</p>
                    <p><span className="font-bold text-gray-900">Last Updated:</span> January 10, 2026</p>
                </div>

                {/* Section 1 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-4">
                        By accessing or using the WYZ Review Management Platform ("Service"), operated by WYZ Digital LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the Service.
                    </p>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm">
                        <strong className="block text-blue-900 mb-2 text-base">Company Information:</strong>
                        <p>WYZ Digital LLC<br/>
                        601 Easton Road<br/>
                        Willow Grove, PA 19090</p>
                        <p className="mt-2">Email: <a href="mailto:wyzreview@wyzdigital.com" className="text-wyz-500 hover:underline font-medium">wyzreview@wyzdigital.com</a></p>
                    </div>
                </section>

                {/* Section 2 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">2. Description of Service</h2>
                    <p>
                        The Service is a Software as a Service (SaaS) platform that enables businesses to collect, manage, and analyze customer reviews and feedback. The Service includes tools for generating review requests via email and QR codes, routing customers based on satisfaction levels, and providing analytics and reporting.
                    </p>
                </section>

                {/* Section 3 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">3. Account Registration and Security</h2>
                    <div className="pl-4 border-l-4 border-gray-100 space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-wyz-800 mb-2">3.1 Account Creation</h3>
                            <p>To use the Service, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-wyz-800 mb-2">3.2 Account Responsibility</h3>
                            <p>You agree to notify us immediately of any unauthorized access to or use of your account. We are not liable for any loss or damage arising from your failure to protect your account information.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-wyz-800 mb-2">3.3 Eligibility</h3>
                            <p>You must be at least 18 years old and have the legal capacity to enter into these Terms. By creating an account, you represent and warrant that you meet these requirements.</p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">4. Subscription and Payment</h2>
                    <div className="space-y-4">
                        <p><strong className="text-gray-900">4.1 Subscription Plans:</strong> We offer various subscription plans with different features and limitations. You agree to pay all fees associated with your selected subscription plan.</p>
                        <p><strong className="text-gray-900">4.2 Billing:</strong> Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan. All fees are non-refundable except as expressly stated in these Terms or required by law.</p>
                        <p><strong className="text-gray-900">4.3 Payment Method:</strong> You must provide valid payment information. You authorize us to charge your payment method for all fees incurred under your account.</p>
                        <p><strong className="text-gray-900">4.4 Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings.</p>
                        <p><strong className="text-gray-900">4.5 Price Changes:</strong> We reserve the right to modify subscription fees with 30 days' notice. Continued use of the Service after a price change constitutes acceptance of the new fees.</p>
                    </div>
                </section>

                {/* Section 5 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">5. Acceptable Use</h2>
                    <h3 className="text-lg font-bold text-wyz-800 mt-6 mb-2">5.1 Permitted Use</h3>
                    <p className="mb-4">You may use the Service only for lawful purposes and in accordance with these Terms. You agree to use the Service solely for collecting legitimate customer feedback for your business.</p>

                    <h3 className="text-lg font-bold text-wyz-800 mt-6 mb-2">5.2 Prohibited Activities</h3>
                    <p className="mb-3">You agree NOT to:</p>
                    <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <li>Use the Service to send spam or unsolicited communications</li>
                        <li>Collect reviews or feedback in a deceptive or fraudulent manner</li>
                        <li>Attempt to manipulate or artificially inflate ratings</li>
                        <li>Post fake or misleading reviews</li>
                        <li>Harass, abuse, or harm other users or their customers</li>
                        <li>Violate any applicable laws or regulations</li>
                        <li>Interfere with or disrupt the Service or servers</li>
                        <li>Attempt to gain unauthorized access to any part of the Service</li>
                        <li>Use the Service to compete with us or create a similar service</li>
                        <li>Remove or modify any proprietary notices or labels</li>
                    </ul>

                    <h3 className="text-lg font-bold text-wyz-800 mt-6 mb-2">5.3 Consequences of Violation</h3>
                    <p>Violation of these acceptable use provisions may result in immediate suspension or termination of your account without refund.</p>
                </section>

                {/* Section 6 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">6. User Content and Data</h2>
                    <p className="mb-3"><strong className="text-gray-900">6.1 Your Content:</strong> You retain ownership of all data, content, and materials you submit through the Service, including customer information, feedback, and reviews ("User Content").</p>
                    <p className="mb-3"><strong className="text-gray-900">6.2 License to Us:</strong> By submitting User Content, you grant us a limited, non-exclusive, worldwide license to use, store, process, and display your User Content solely to provide and improve the Service.</p>
                    <p className="mb-3"><strong className="text-gray-900">6.3 Content Responsibility:</strong> You are solely responsible for the accuracy, legality, and appropriateness of your User Content. You represent that you have all necessary rights and permissions to collect and submit User Content through the Service.</p>
                    <p><strong className="text-gray-900">6.4 Data Backup:</strong> While we implement backup procedures, you are responsible for maintaining your own backup copies of your User Content. We are not liable for any loss or corruption of User Content.</p>
                </section>

                {/* Section 7 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">7. Intellectual Property Rights</h2>
                    <p className="mb-3"><strong className="text-gray-900">7.1 Our Property:</strong> The Service, including all software, designs, text, graphics, logos, and other content (excluding User Content), is owned by WYZ Digital LLC and is protected by copyright, trademark, and other intellectual property laws.</p>
                    <p className="mb-3"><strong className="text-gray-900">7.2 Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use the Service for your business purposes in accordance with these Terms.</p>
                    <p><strong className="text-gray-900">7.3 Restrictions:</strong> You may not copy, modify, distribute, sell, lease, or reverse engineer any part of the Service without our express written permission.</p>
                </section>

                {/* Section 8 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">8. Third-Party Services</h2>
                    <p>The Service may integrate with third-party services such as email providers, payment processors, and review platforms. Your use of third-party services is subject to their respective terms and conditions. We are not responsible for the availability, functionality, or content of third-party services.</p>
                </section>

                {/* Section 9 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">9. Service Availability and Modifications</h2>
                    <p className="mb-3"><strong className="text-gray-900">9.1 Availability:</strong> We strive to maintain 99.9% uptime but do not guarantee uninterrupted or error-free access to the Service. We may perform scheduled maintenance with advance notice when possible.</p>
                    <p><strong className="text-gray-900">9.2 Modifications:</strong> We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice. We are not liable for any modification, suspension, or discontinuation of the Service.</p>
                </section>

                {/* Section 10 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">10. Termination</h2>
                    <p className="mb-3"><strong className="text-gray-900">10.1 Termination by You:</strong> You may terminate your account at any time by canceling your subscription through your account settings or by contacting us at wyzreview@wyzdigital.com.</p>
                    <p className="mb-3"><strong className="text-gray-900">10.2 Termination by Us:</strong> We may suspend or terminate your account immediately if you violate these Terms, fail to pay fees, or engage in fraudulent or illegal activity.</p>
                    <p><strong className="text-gray-900">10.3 Effect of Termination:</strong> Upon termination, your right to use the Service immediately ceases. We may delete your User Content after a reasonable period following termination. Fees paid are non-refundable except as required by law.</p>
                </section>

                {/* Section 11 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">11. Disclaimers and Limitations of Liability</h2>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-6 text-sm text-red-900 space-y-4">
                        <p><strong className="block text-red-800 mb-1">11.1 Service Provided "As Is"</strong>
                        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
                        
                        <p><strong className="block text-red-800 mb-1">11.2 No Guarantee of Results</strong>
                        We do not guarantee that use of the Service will result in increased reviews, improved ratings, or any specific business outcomes.</p>
                        
                        <p><strong className="block text-red-800 mb-1">11.3 Limitation of Liability</strong>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WYZ DIGITAL LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                        
                        <p><strong className="block text-red-800 mb-1">11.4 Maximum Liability</strong>
                        OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
                    </div>
                </section>

                {/* Section 12 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">12. Indemnification</h2>
                    <p className="mb-3">You agree to indemnify, defend, and hold harmless WYZ Digital LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Your use of the Service</li>
                        <li>Your User Content</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any rights of another party</li>
                    </ul>
                </section>

                {/* Section 13 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">13. Dispute Resolution</h2>
                    <p className="mb-3"><strong className="text-gray-900">13.1 Governing Law:</strong> These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles.</p>
                    <p className="mb-3"><strong className="text-gray-900">13.2 Informal Resolution:</strong> Before filing a formal claim, you agree to contact us at wyzreview@wyzdigital.com to attempt to resolve any dispute informally.</p>
                    <p className="mb-3"><strong className="text-gray-900">13.3 Arbitration:</strong> Any dispute not resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration shall take place in Montgomery County, Pennsylvania.</p>
                    <p><strong className="text-gray-900">13.4 Class Action Waiver:</strong> You agree to resolve disputes with us only on an individual basis and waive any right to participate in class actions or class arbitrations.</p>
                </section>

                {/* Section 14 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">14. General Provisions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="mb-2"><strong className="text-gray-900">14.1 Entire Agreement:</strong> These Terms constitute the entire agreement between you and WYZ Digital LLC regarding the Service and supersede all prior agreements and understandings.</p>
                            <p className="mb-2"><strong className="text-gray-900">14.2 Amendments:</strong> We may modify these Terms at any time by posting updated Terms on our website. Continued use of the Service after changes are posted constitutes acceptance of the modified Terms.</p>
                            <p><strong className="text-gray-900">14.3 Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
                        </div>
                        <div>
                            <p className="mb-2"><strong className="text-gray-900">14.4 Waiver:</strong> Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.</p>
                            <p className="mb-2"><strong className="text-gray-900">14.5 Assignment:</strong> You may not assign or transfer these Terms or your account without our written consent. We may assign these Terms without restriction.</p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                <strong className="text-gray-900 block mb-1">14.6 Contact Information:</strong>
                                For questions about these Terms, please contact us at:
                                <p className="mt-2 font-medium">WYZ Digital LLC<br/>
                                601 Easton Road<br/>
                                Willow Grove, PA 19090<br/>
                                Email: wyzreview@wyzdigital.com</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 15 */}
                <section>
                    <h2 className="text-2xl font-bold text-wyz-900 mb-4">15. Additional Terms for Specific Features</h2>
                    <p className="mb-3"><strong className="text-gray-900">15.1 Email Services:</strong> When using our email review request features, you agree to comply with all applicable anti-spam laws, including the CAN-SPAM Act and similar regulations.</p>
                    <p className="mb-3"><strong className="text-gray-900">15.2 Customer Data:</strong> You represent that you have obtained all necessary consents and permissions to collect and use customer contact information through the Service.</p>
                    <p><strong className="text-gray-900">15.3 Review Site Integration:</strong> We are not responsible for the policies, practices, or availability of third-party review sites. Your customers' interactions with review sites are subject to those platforms' terms of service.</p>
                </section>

                <hr className="border-gray-200 my-8" />
                
                <p className="text-center text-sm text-gray-500 italic">
                    By using the WYZ Review Management Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>

            </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-wyz-900 border-t border-gray-800 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="text-white font-bold text-lg">WYZReview</span>
                <p className="text-sm mt-1">© 2026 WYZ Digital LLC. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
                <NavLink to="/terms-privacy" className="hover:text-white transition-colors">Privacy & Terms</NavLink>
                <NavLink to="/contact" className="hover:text-white transition-colors">Support</NavLink>
                <NavLink to="/login" className="hover:text-white transition-colors">Login</NavLink>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsPrivacy;