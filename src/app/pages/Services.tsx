import { motion } from "motion/react";
import { FlaskConical, ShoppingBag, Bed, Heart, Stethoscope, Pill, Activity, Phone } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: FlaskConical,
      title: "Medical Testing & Diagnostics",
      color: "blue",
      image: "https://images.unsplash.com/photo-1768498993096-6db9950eeb1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3RpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Our advanced diagnostic laboratory is equipped with modern equipment to provide accurate and timely test results. We offer a comprehensive range of medical tests to aid in proper diagnosis and treatment planning.",
      features: [
        "Blood Tests (Complete Blood Count, Lipid Profile, Blood Sugar)",
        "Urine Analysis",
        "Liver & Kidney Function Tests",
        "Thyroid Function Tests",
        "Diabetes Screening",
        "Pregnancy Tests",
        "Quick Results & Reports",
        "Affordable Pricing",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Medical Store & Pharmacy",
      color: "green",
      image: "https://images.unsplash.com/photo-1599557835468-29bb0b3155cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3RpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Our fully stocked pharmacy ensures that you have access to all necessary medications and healthcare products. We maintain quality standards and offer both generic and branded medicines at competitive prices.",
      features: [
        "Prescription Medicines",
        "Over-the-Counter (OTC) Products",
        "Generic & Branded Medicines",
        "Medical Supplies & Equipment",
        "First Aid Products",
        "Health Supplements & Vitamins",
        "24/7 Availability",
        "Expert Pharmacist Consultation",
      ],
    },
    {
      icon: Bed,
      title: "Patient Rooms & Hospitalization",
      color: "purple",
      image: "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3NwaXRhbCUyMHBhdGllbnQlMjByb29tJTIwYmVkfGVufDF8fHx8MTc3NjAxMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Our comfortable and well-equipped patient rooms provide a healing environment for recovery. Each room is designed with patient comfort and safety in mind, with modern amenities and round-the-clock nursing care.",
      features: [
        "Clean & Comfortable Beds",
        "24/7 Nursing Care",
        "Modern Medical Equipment",
        "Patient Monitoring Systems",
        "Attached Bathrooms",
        "Visitor Facilities",
        "Nutritious Meals Provided",
        "Emergency Call Systems",
      ],
    },
    {
      icon: Stethoscope,
      title: "General Medicine & Consultation",
      color: "orange",
      image: "https://images.unsplash.com/photo-1650174378624-c9ab2c99e512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHBhdGllbnQlMjByb29tJTIwYmVkfGVufDF8fHx8MTc3NjAxMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Experienced doctors provide comprehensive medical consultations for various health conditions. We focus on accurate diagnosis and personalized treatment plans for each patient.",
      features: [
        "General Health Check-ups",
        "Treatment of Common Illnesses",
        "Chronic Disease Management",
        "Fever & Infection Treatment",
        "Preventive Healthcare Advice",
        "Medical Prescriptions",
        "Follow-up Care",
        "Health Counseling",
      ],
    },
    {
      icon: Activity,
      title: "Emergency Care",
      color: "red",
      image: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Our emergency care services are available 24/7 to handle urgent medical situations. We provide immediate medical attention and stabilization for critical conditions.",
      features: [
        "24/7 Emergency Services",
        "Trauma Care",
        "Accident & Injury Treatment",
        "Critical Patient Stabilization",
        "Emergency Medications",
        "Immediate Medical Attention",
        "Ambulance Coordination",
        "Quick Response Time",
      ],
    },
    {
      icon: Heart,
      title: "Preventive Healthcare",
      color: "pink",
      image: "https://images.unsplash.com/photo-1764885518098-781b23d50e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc2MDEyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "We believe prevention is better than cure. Our preventive healthcare services help you maintain good health and catch potential health issues early.",
      features: [
        "Health Screening Packages",
        "Vaccination Services",
        "Lifestyle Disease Prevention",
        "Nutritional Counseling",
        "Health Education",
        "Regular Health Monitoring",
        "Disease Risk Assessment",
        "Wellness Programs",
      ],
    },
  ];

  const colorStyles: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-100", icon: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-100", icon: "text-orange-600", border: "border-orange-200" },
    red: { bg: "bg-red-100", icon: "text-red-600", border: "border-red-200" },
    pink: { bg: "bg-pink-100", icon: "text-pink-600", border: "border-pink-200" },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to meet all your medical needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const styles = colorStyles[service.color];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className={`${isEven ? "" : "md:col-start-2"}`}>
                    <div className={`w-16 h-16 ${styles.bg} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${styles.icon}`} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className={`w-6 h-6 ${styles.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className={`w-2 h-2 ${styles.icon} bg-current rounded-full`}></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${isEven ? "" : "md:col-start-1 md:row-start-1"}`}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Need Any of Our Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today or visit our hospital. We're here to help you 24/7.
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
    </div>
  );
}
