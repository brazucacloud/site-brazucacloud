import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: t("contact.form.validation.name") }),
    email: z.string().email({ message: t("contact.form.validation.email") }),
    phone: z.string().min(10, { message: t("contact.form.validation.phone") }),
    company: z.string().min(2, { message: t("contact.form.validation.company") }),
    service: z.string().min(1, { message: t("contact.form.validation.service") }),
    message: z.string().min(10, { message: t("contact.form.validation.message") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.message"),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t("contact.form.error.title"),
        description: error.message || t("contact.form.error.message"),
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <section className="py-16 bg-light-gray" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">{t("contact.title")}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-inter">Endereço</h3>
                  <p className="text-gray-700">Avenida Santa Cruz, 2187, Vila Madalena, São Paulo-SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-inter">Telefone</h3>
                  <p className="text-gray-700">
                    <a href="https://wa.me/551146735599" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      (11) 4673-5599
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-inter">Email</h3>
                  <p className="text-gray-700">contato@brazucacloud.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 font-inter">{t("contact.social.title")}</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/profile.php?id=100080580866006" target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com/brazuca_cloud" target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                  <Twitter size={18} />
                </a>
                <a href="https://www.linkedin.com/company/brazuca-cloud/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 font-inter">{t("contact.form.title")}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.fields.name")}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.fields.email")}</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.fields.phone")}</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.fields.company")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.fields.service")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t("contact.form.fields.selectService")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="nuvem-privada">{t("contact.form.services.privateCloud")}</SelectItem>
                            <SelectItem value="cloud-center">{t("contact.form.services.cloudCenter")}</SelectItem>
                            <SelectItem value="datacenter-virtual">{t("contact.form.services.virtualDatacenter")}</SelectItem>
                            <SelectItem value="cloud-server">{t("contact.form.services.cloudServer")}</SelectItem>
                            <SelectItem value="outro">{t("contact.form.services.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.fields.message")}</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                    disabled={isPending}
                  >
                    {isPending ? t("contact.form.submitting") : t("contact.form.submit")}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;