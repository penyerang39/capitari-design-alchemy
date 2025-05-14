
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const budgetOptions = [
  { value: "under1k", label: "Under $1k" },
  { value: "1k-5k", label: "$1k - $5k" },
  { value: "5k-10k", label: "$5k - $10k" },
  { value: "10k-25k", label: "$10k - $25k" },
  { value: "over25k", label: "Over $25k" },
];

const timeframeOptions = [
  { value: "under1week", label: "< 1 week" },
  { value: "1-4weeks", label: "1-4 weeks" },
  { value: "1-3months", label: "1-3 months" },
  { value: "3-6months", label: "3-6 months" },
  { value: "6-12months", label: "6-12 months" },
  { value: "over1year", label: "> 1 year" },
];

const serviceOptions = [
  { id: "userResearch", label: "User Research" },
  { id: "competitorAudit", label: "Competitor Audit" },
  { id: "designSystem", label: "Design System Rework" },
  { id: "seo", label: "SEO Optimization" },
  { id: "custom", label: "Custom Development" },
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
    timeframe: "",
    services: [] as string[],
  });

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add email sending logic here
    console.log("Form submitted:", formData);

    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll respond within 48 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      budget: "",
      timeframe: "",
      services: [],
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-montagu mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
            Ready to start your project? Fill out the form below and we'll get back to you within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-md reveal-on-scroll">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Estimated Budget</Label>
                  <RadioGroup 
                    value={formData.budget} 
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    className="grid grid-cols-2 gap-2 mt-2"
                  >
                    {budgetOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                        <Label htmlFor={`budget-${option.value}`} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label>Project Timeframe</Label>
                  <RadioGroup 
                    value={formData.timeframe} 
                    onValueChange={(value) => setFormData({ ...formData, timeframe: value })}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2"
                  >
                    {timeframeOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`timeframe-${option.value}`} />
                        <Label htmlFor={`timeframe-${option.value}`} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label>Services Required</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {serviceOptions.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service.id} 
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceChange(service.id)}
                        />
                        <Label htmlFor={service.id} className="cursor-pointer">{service.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-capitari-blue hover:bg-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center reveal-on-scroll">
            <div className="space-y-8">
              <div className="border-l-4 border-capitari-blue pl-6 py-2">
                <h3 className="text-2xl font-montagu mb-2">Email</h3>
                <p className="text-lg">hello@capitari.com</p>
              </div>
              
              <div className="border-l-4 border-capitari-magenta pl-6 py-2">
                <h3 className="text-2xl font-montagu mb-2">Office</h3>
                <p className="text-lg">San Francisco, CA</p>
              </div>
              
              <div className="border-l-4 border-capitari-black pl-6 py-2">
                <h3 className="text-2xl font-montagu mb-2">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-600 hover:text-capitari-blue transition-colors">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-capitari-blue transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-capitari-blue transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
