import { motion } from "framer-motion";
import { 
  Home, 
  ClipboardList, 
  ListChecks, 
  ShieldCheck, 
  ScrollText, 
  Calculator 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Pre-Purchase Surveys",
    description: "Comprehensive homebuyer reports highlighting potential issues and necessary repairs before you finalize your property purchase."
  },
  {
    icon: ClipboardList,
    title: "Building Condition Reports",
    description: "Detailed assessments of structural conditions for commercial and residential properties to guide maintenance and investment."
  },
  {
    icon: ListChecks,
    title: "Snag Lists",
    description: "Meticulous inspection of newly built properties to identify defects, unfinished work, and cosmetic issues for the developer to rectify."
  },
  {
    icon: ShieldCheck,
    title: "Opinions on Compliance",
    description: "Issued following the completion of works and based on a visual inspection of the finished structure. An Opinion on Compliance for Exempt Development certifies that the structural works substantially comply with the regulations for exempt developments, whilst an Opinion on Compliance with Planning Permission certifies that the works substantially comply with Planning and Building Regulations."
  },
  {
    icon: ScrollText,
    title: "Schedule of Condition",
    description: "Often used in lease agreements to protect both landlord and tenant, a Schedule of Condition provides a documented record of the property's state at the commencement of the lease. It serves as a benchmark against which the property's condition can be assessed at a later date, with any changes clearly identified."
  },
    {
    icon: Calculator,
    title: "Building Reinstatement Cost Assessment",
    description: "A Building Reinstatement Cost Assessment (BRCA) is a professional valuation of the total cost to rebuild a property to its original condition, typically carried out for insurance purposes. It accounts for demolition, debris removal, materials, professional fees, and compliance with current building regulations. A full on-site assessment is recommended every 3–5 years to reflect inflation, rising construction costs, and changes in regulations."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Our Professional <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We provide a comprehensive range of building surveying services tailored to protect your investments and ensure structural integrity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
