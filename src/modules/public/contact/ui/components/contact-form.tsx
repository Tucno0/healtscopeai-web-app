"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Auto-hide success and error messages after 4 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus("idle");

    try {
      console.log("📤 Enviando formulario de contacto:", formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Respuesta del servidor:", {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("✅ Formulario enviado exitosamente:", result);

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("❌ Error enviando formulario:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto-formulario" className="py-24 bg-gradient-to-br from-background via-muted to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Envíanos un Mensaje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible. 
              Tu información está segura con nosotros.
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Información de Contacto
              </CardTitle>
              <p className="text-muted-foreground">
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8 p-8">
              <form onSubmit={handleSubmit} suppressHydrationWarning>
                {/* Contact Information Section */}
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Nombre
                      </Label>
                      <div className="relative">
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Tu nombre" 
                          className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          required
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Apellido
                      </Label>
                      <div className="relative">
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Tu apellido" 
                          className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          required
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </Label>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com" 
                        className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Teléfono
                    </Label>
                    <div className="relative">
                      <Input 
                        id="phone" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+51 999 123 456" 
                        className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                </div>
                
                {/* Subject Section */}
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Asunto
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("subject", value)} value={formData.subject}>
                    <SelectTrigger className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Automatizaciones">Automatizaciones</SelectItem>
                      <SelectItem value="Consultas">Consultas</SelectItem>
                      <SelectItem value="Otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Message Section */}
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Mensaje
                  </Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                    required
                    suppressHydrationWarning
                  />
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg font-semibold disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center">
                      ✅ ¡Mensaje enviado exitosamente! Te responderemos pronto.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-center">
                      ❌ Error al enviar el mensaje. Por favor, intenta nuevamente.
                    </p>
                  </div>
                )}
              </form>
              
              {/* Privacy Notice */}
              <div className="text-center pt-4">
                <p className="text-xs text-muted-foreground">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="#" className="text-primary hover:underline">Política de Privacidad</a>
                  {" "}y{" "}
                  <a href="#" className="text-primary hover:underline">Términos de Servicio</a>
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Additional Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">contacto@healtscopeai.com</p>
            </div>
            
                         <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border">
               <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
               <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
               <p className="text-muted-foreground text-sm">+51 999 123 456</p>
             </div>
            
            <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Respuesta</h3>
              <p className="text-muted-foreground text-sm">En menos de 24 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 