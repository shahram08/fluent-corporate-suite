
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-corporate-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Corporate Avenue<br />
                      Business District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-corporate-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-corporate-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@corporatepro.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-corporate-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                    Thank you for reaching out. Our team will review your message and get back to you shortly.
                  </p>
                  <Button onClick={resetForm}>Send Another Message</Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.539878962188!2d-74.0125680733534!3d40.70793317628556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619087470023!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            loading="lazy"
            title="Office Location"
          />
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              { 
                q: "What services does CorporatePro offer?", 
                a: "CorporatePro offers a comprehensive range of business services including business consulting, digital marketing, web development, graphic design, data analytics, and brand strategy." 
              },
              { 
                q: "How can I request a quote for your services?", 
                a: "You can request a quote by filling out our contact form above, calling our office directly, or sending an email to info@corporatepro.com with details about your project needs." 
              },
              { 
                q: "Do you work with international clients?", 
                a: "Yes, we have experience working with clients globally and can accommodate different time zones and languages to ensure smooth communication and project delivery." 
              },
              { 
                q: "What is your typical process for new clients?", 
                a: "Our process typically begins with an initial consultation to understand your needs, followed by a proposal outlining our recommended approach, timeline, and costs. Once approved, we'll assign a dedicated team to your project and provide regular updates throughout implementation." 
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
