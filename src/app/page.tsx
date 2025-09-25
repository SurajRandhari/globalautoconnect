import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Star, Settings, ShieldCheck, Truck, Clock, CreditCard, Search, Wrench, Users, Award, Tag, ShoppingCart, MessageSquare, Phone, Mail, Clock10, ArrowUp, CircleCheckBig } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AnimatedDiv } from '@/components/animated-div';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { whyChooseUsFeatures, stats, premiumParts, qualityProcess, popularParts, testimonials, trustFeatures, certifications, securityFeatures, footerNav } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCounter } from '@/components/animated-counter';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-car');

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseUsSection />
        <StatsSection />
        <PremiumPartsSection />
        <QualityProcessSection />
        <FindPartSection />
        <TestimonialsSection />
        <TrustSection />
        <HappyCustomersSection/>
        <GetQuoteSection />
      </main>
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  if (!heroImage) return null;

  return (
    <section className="relative w-full py-20 md:py-32 bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-10 dark:opacity-5"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 text-center">
            <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <Image src="https://picsum.photos/seed/gears/32/32" alt="Car Engine" width={32} height={32} className="rounded-full" data-ai-hint="car engine" />
                    <Image src="https://picsum.photos/seed/transmission/32/32" alt="Transmission" width={32} height={32} className="rounded-full" data-ai-hint="transmission gears" />
                </div>
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Get Quality OEM Parts <br /> at <span className="text-yellow-500">50% Less Cost</span>
                </h1>
            </AnimatedDiv>
            <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
            >
                <p>
                    Stop overpaying for new parts. Our rigorously inspected OEM used parts offer guaranteed compatibility, quality assurance, and massive savings with fast nationwide delivery.
                </p>
            </AnimatedDiv>
            <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8 flex flex-wrap justify-center gap-4"
            >
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="#find-part">Find Your Parts Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="#get-quote">Request a Quote</Link>
                </Button>
            </AnimatedDiv>
            <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="mt-8 text-sm text-muted-foreground"
            >
                <p>✓ Over 50,000+ satisfied customers • ✓ 90-day warranty • ✓ Free nationwide shipping on orders over $99</p>
            </AnimatedDiv>
        </div>
    </section>
  );
}


const WhyChooseUsSection = () => (
  <section id="why-us" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose Global Auto Connect?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          We've revolutionized the used auto parts industry with unmatched quality, service, and savings that traditional suppliers simply can't match.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseUsFeatures.map((feature, index) => (
          <AnimatedDiv
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full text-center transition-all hover:shadow-lg hover:-translate-y-1 bg-card border">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection = () => (
    <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <AnimatedDiv
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                         <div className="flex items-center justify-center space-x-2">
                             <stat.icon className="h-8 w-8 text-foreground" />
                             <p className="text-4xl font-bold font-headline">
                               <AnimatedCounter value={stat.value} />
                               {stat.suffix}
                             </p>
                         </div>
                        <p className="mt-2 text-muted-foreground">{stat.label}</p>
                    </AnimatedDiv>
                ))}
            </div>
        </div>
    </section>
);

const PremiumPartsSection = () => (
    <section id="parts" className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    Premium Quality Parts You Can Trust
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                    Every part in our inventory undergoes rigorous inspection and testing to ensure you receive only the highest quality OEM components for your vehicle.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {premiumParts.map((part, index) => {
                    const partImage = PlaceHolderImages.find(p => p.id === part.imageId);
                    return (
                        <AnimatedDiv
                            key={part.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden h-full group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-video w-full">
                                        {partImage && (
                                          <Image
                                              src={partImage.imageUrl}
                                              alt={part.title}
                                              fill
                                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                              data-ai-hint={partImage.imageHint}
                                          />
                                        )}
                                        <Badge variant="secondary" className="absolute top-4 right-4">{part.badge}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <CardTitle className="font-headline text-xl">{part.title}</CardTitle>
                                    <CardDescription className="mt-2">{part.description}</CardDescription>
                                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        {part.features.map(feature => (
                                            <li key={feature} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </AnimatedDiv>
                    );
                })}
            </div>
        </div>
    </section>
);


const QualityProcessSection = () => {
    const qualityImage = PlaceHolderImages.find(p => p.id === 'engine-bay-check');
    return (
        <section id="process" className="py-16 md:py-24 bg-secondary/50">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <AnimatedDiv
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Quality Process</h2>
                    <ul className="mt-8 space-y-8">
                        {qualityProcess.map(step => (
                            <li key={step.step} className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                                        {step.step}
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-foreground">{step.title}</h4>
                                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative h-full min-h-[400px] rounded-lg overflow-hidden"
                >
                    {qualityImage &&
                      <Image
                          src={qualityImage.imageUrl}
                          alt={qualityImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={qualityImage.imageHint}
                      />
                    }
                    <div className="absolute inset-0 bg-black/20" />
                </AnimatedDiv>
            </div>
        </section>
    );
}

const FindPartSection = () => {
    const gearsImage = PlaceHolderImages.find(p => p.id === 'automotive-gears');
    return (
        <section id="find-part" className="py-16 md:py-24 bg-background">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Find Your Perfect Part
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        Search our massive inventory using your VIN number or vehicle details for guaranteed compatibility.
                    </p>
                </div>
                
                <Card className="p-6 md:p-8">
                    <CardContent className="p-0">
                        <Tabs defaultValue="make-model">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="make-model">Search by Make & Model</TabsTrigger>
                                <TabsTrigger value="vin">Search by VIN</TabsTrigger>
                            </TabsList>
                            <TabsContent value="make-model">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="2023">2023</SelectItem>
                                            <SelectItem value="2022">2022</SelectItem>
                                            <SelectItem value="2021">2021</SelectItem>
                                            <SelectItem value="2020">2020</SelectItem>
                                            <SelectItem value="2015">2015</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Make" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kia">Kia</SelectItem>
                                            <SelectItem value="honda">Honda</SelectItem>
                                            <SelectItem value="bmw">BMW</SelectItem>
                                            <SelectItem value="ford">Ford</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Model" /></SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="accord">Accord</SelectItem>
                                          <SelectItem value="sorento">Sorento</SelectItem>
                                          <SelectItem value="x5">X5</SelectItem>
                                          <SelectItem value="f150">F-150</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Part" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="engine">Engine</SelectItem>
                                            <SelectItem value="transmission">Transmission</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </TabsContent>
                            <TabsContent value="vin">
                                <Input placeholder="Enter your 17-digit VIN" />
                            </TabsContent>
                        </Tabs>

                        <Button className="mt-6 w-full" size="lg">
                            <Search className="mr-2 h-4 w-4" /> Search Available Parts
                        </Button>

                        <div className="mt-8">
                            <h4 className="font-semibold text-center mb-4">Popular Parts</h4>
                            <div className="flex flex-wrap justify-center gap-2">
                                {popularParts.map(part => (
                                    <Badge key={part} variant="secondary" className="cursor-pointer hover:bg-muted">{part}</Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

const TestimonialsSection = () => (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                    Join thousands of satisfied customers who trust Global Auto Connect for their auto part needs.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => {
                  const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                  return (
                    <AnimatedDiv
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col">
                            <CardContent className="p-6 flex-grow">
                                <div className="flex text-yellow-500 mb-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                </div>
                                <blockquote className="text-foreground">
                                    <p>"{testimonial.quote}"</p>
                                </blockquote>
                            </CardContent>
                             <CardHeader className="flex flex-row items-center gap-4 pt-0">
                                {avatarImage && (
                                    <Avatar>
                                        <AvatarImage src={avatarImage.imageUrl} alt={testimonial.author} data-ai-hint={avatarImage.imageHint} />
                                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div>
                                    <CardTitle className="text-base font-semibold">{testimonial.author}</CardTitle>
                                    <CardDescription>{testimonial.location}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </AnimatedDiv>
                )})}
            </div>
            <div className="text-center mt-12">
              <div className="inline-flex items-center justify-center rounded-full bg-background p-4 shadow-md">
                <p className="font-bold text-lg">4.9 / 5</p>
                <div className="flex text-yellow-500 ml-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Based on 12,450+ verified reviews</p>
            </div>
        </div>
    </section>
);


const TrustSection = () => (
    <section id="trust" className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Your Trust is Our Priority</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                    We stand behind every part with industry-leading warranties, certifications, and guarantees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {trustFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                                <feature.icon className="h-6 w-6" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium text-foreground">{feature.title}</h4>
                            <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <Separator className="my-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="font-semibold text-xl mb-4">Industry Certifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="p-2 bg-secondary rounded-full">
                                   <cert.icon className="h-6 w-6 text-foreground" />
                                </div>
                                <span className="font-medium">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="font-semibold text-xl mb-4">Security & Trust</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {securityFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                               <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const HappyCustomersSection = () => {
    const engineDetailImage = PlaceHolderImages.find(p => p.id === 'engine-detail');
    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <div className="relative rounded-lg overflow-hidden p-8 md:p-12 text-center text-primary-foreground">
                    {engineDetailImage && (
                        <Image
                            src={engineDetailImage.imageUrl}
                            alt={engineDetailImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={engineDetailImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-primary/90"></div>
                    <div className="relative z-10">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                            Over 50,000 Happy Customers Trust Global Auto Connect
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl md:text-lg">
                            Join the thousands of mechanics, auto enthusiasts, and everyday drivers who rely on us for quality OEM parts, exceptional service, and unbeatable prices.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                <Link href="#find-part">Find Parts</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                                <Link href="#get-quote">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const GetQuoteSection = () => {
    return (
        <section id="get-quote" className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get Your Quote Today</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        Ready to save big on quality OEM parts? Contact our experts for a personalized quote and let us help you find exactly what you need.
                    </p>
                </div>
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                      <Card className="p-6 md:p-8">
                        <form className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Input placeholder="John Smith *" required />
                            <Input type="tel" placeholder="(555) 123-4567" />
                          </div>
                          <Input type="email" placeholder="john@example.com *" required />
                          <Textarea placeholder="Tell us about the part you need - include your vehicle year, make, model, and specific part requirements... *" required rows={5}/>
                          <Button type="submit" className="w-full" size="lg">Send My Quote Request</Button>
                          <p className="text-xs text-muted-foreground text-center">* Required fields. We typically respond within 2 hours during business hours.</p>
                        </form>
                      </Card>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                          <div className="space-y-4">
                              <div className="flex items-start">
                                <Phone className="h-5 w-5 mr-3 mt-1 text-muted-foreground" />
                                <div>
                                  <h4 className="font-medium">Call Us</h4>
                                  <p className="text-sm text-muted-foreground">+1 (979) 452-4280</p>
                                  <p className="text-sm text-muted-foreground">+1 (972) 419-4504</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <Mail className="h-5 w-5 mr-3 mt-1 text-muted-foreground" />
                                <div>
                                  <h4 className="font-medium">Email Us</h4>
                                  <p className="text-sm text-muted-foreground">info@connectglobalauto.site</p>
                                  <p className="text-sm text-muted-foreground">quotes@connectglobalauto.site</p>
                                </div>
                              </div>
                               <div className="flex items-start">
                                <Clock10 className="h-5 w-5 mr-3 mt-1 text-muted-foreground" />
                                <div>
                                  <h4 className="font-medium">Business Hours</h4>
                                  <p className="text-sm text-muted-foreground">Mon-Fri: 7AM-9PM EST</p>
                                   <p className="text-sm text-muted-foreground">24/7 Online Ordering</p>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div>
                          <Card className="bg-secondary p-6 text-center">
                            <h4 className="font-semibold">Need Parts Right Now?</h4>
                            <p className="text-sm text-muted-foreground mt-1">Call our experts for immediate assistance.</p>
                            <Button className="mt-4 w-full"><Phone className="mr-2"/> Call +1 (979) 452-4280</Button>
                          </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
