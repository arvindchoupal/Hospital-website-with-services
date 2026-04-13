import { motion } from "motion/react";
import { Phone, Clock, FlaskConical, ShoppingBag, Bed, Star } from "lucide-react";
import { Link } from "react-router";
import hospitalImage from "../../imports/image-1.png";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={hospitalImage}
            alt="Maa Parwati Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Trusted Healthcare<br />for Your Family
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive medical services available 24/7 in Chhathapur, Supaul, Bihar
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:09570271247"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  09570 271247
                </a>
                <Link
                  to="/services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">Open 24 Hours</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete healthcare solutions under one roof
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1768498993096-6db9950eeb1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3RpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medical Testing Laboratory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <FlaskConical className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced diagnostic laboratory with accurate and timely test results for all medical conditions.
                  </p>
                  <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Medical Store */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1599557835468-29bb0b3155cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3RpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medical Store Pharmacy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <ShoppingBag className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Store</h3>
                  <p className="text-gray-600 mb-4">
                    Fully stocked pharmacy with quality medicines and healthcare products available 24/7.
                  </p>
                  <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Rooms Available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMHBhdGllbnQlMjByb29tJTIwYmVkfGVufDF8fHx8MTc3NjAxMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Hospital Patient Rooms"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Bed className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Patient Rooms</h3>
                  <p className="text-gray-600 mb-4">
                    Comfortable and well-equipped patient rooms with modern facilities for quality care and recovery.
                  </p>
                  <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Maa Parwati Hospital?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are committed to providing the best healthcare services to our community with compassion and expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">24/7 Emergency Care</h3>
                    <p className="text-gray-600">Round-the-clock medical services for urgent healthcare needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Quality Care</h3>
                    <p className="text-gray-600">Experienced medical professionals dedicated to your health and wellbeing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Advanced Diagnostics</h3>
                    <p className="text-gray-600">State-of-the-art testing facilities for accurate diagnosis and treatment.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hospital Exterior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Need Medical Assistance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our dedicated team is ready to help you 24/7. Contact us today for quality healthcare services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:09570271247"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: 09570 271247
              </a>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors border-2 border-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
