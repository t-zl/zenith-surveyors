import React, { FC } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(50).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const { mutate: submitContact, isPending } = useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        reset();
      },
      onError: (error) => {
        toast({
          title: "Submission Failed",
          description: error?.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      },
    }
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    // The API hook expects { data: ContactSubmission }
    submitContact({ data });
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
          
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-primary text-primary-foreground p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-accent opacity-20" />
            
            <h3 className="text-3xl font-display font-bold mb-4 relative z-10">Get in Touch</h3>
            <p className="text-primary-foreground/80 mb-12 relative z-10 text-lg">
              Fill out the form and our team will get back to you within 24 hours to discuss your surveying needs.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+353872957666" className="text-xl font-medium hover:text-accent transition-colors">
                    +353 (0)87 295 7666
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:info@zenithsurveyors.com" className="text-lg font-medium hover:text-accent transition-colors">
                    info@zenithsurveyors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider mb-1">Office</h4>
                  <p className="text-lg font-medium leading-relaxed">
                    20 Harcourt St, Dublin 2, D02 H364, Ireland
                  </p>
                  <p className="mt-2 text-primary-foreground/80 text-sm">Mon-Fri: 9:00 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-10 md:p-14"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</label>
                  <input
                    {...register("name")}
                    id="name"
                    className={`w-full px-4 py-3 rounded-xl bg-muted/30 border ${errors.name ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl bg-muted/30 border ${errors.email ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                  <input
                    {...register("phone")}
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200"
                    placeholder="+353 XX XXX XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                  <input
                    {...register("subject")}
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Pre-Purchase Survey Enquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/30 border ${errors.message ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200 resize-none`}
                  placeholder="Tell us about the property and what you need..."
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
              >
                {isPending ? "Sending..." : "Send Message"}
                {!isPending && <Send className="w-5 h-5 ml-1" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
