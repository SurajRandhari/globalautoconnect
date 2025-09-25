import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AnimatedDiv } from '@/components/animated-div';
import { services, featuredVehicles, whyChooseUsFeatures, testimonials, navItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-car');

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FeaturedVehiclesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  if (!heroImage) return null;

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:h-screen text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Drive Your Dream.
          </h1>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-primary">
            Globally.
          </h1>
        </AnimatedDiv>
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-neutral-200"
        >
          <p>
            From rare classics to the latest supercars, Global Auto Connect sources, verifies, and delivers the world's most desirable vehicles right to your doorstep.
          </p>
        </AnimatedDiv>
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#">Explore Inventory</Link>
          </Button>
        </AnimatedDiv>
      </div>
    </section>
  );
}

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          A World-Class Experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-xl">
          We offer a comprehensive suite of services to ensure a seamless and secure vehicle acquisition process.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <AnimatedDiv
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full text-center transition-all hover:shadow-lg hover:-translate-y-2 bg-card">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedVehiclesSection = () => (
  <section id="inventory" className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Featured Vehicles
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-xl">
          A curated selection from our global inventory. See something you like? Let us know.
        </p>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full mt-12"
      >
        <CarouselContent>
          {featuredVehicles.map((vehicle) => (
            <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/2] w-full">
                      <Image
                        src={vehicle.image.url}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={vehicle.image.hint}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-semibold">{vehicle.name}</h3>
                      <p className="mt-1 text-2xl font-bold text-primary">{vehicle.price}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {vehicle.specs.map(spec => (
                           <Badge key={spec} variant="secondary">{spec}</Badge>
                        ))}
                      </div>
                      <Button className="mt-6 w-full bg-accent hover:bg-accent/90 text-accent-foreground">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </div>
  </section>
);


const WhyChooseUsSection = () => (
    <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <AnimatedDiv 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Global Auto Connect?</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    We're more than just a marketplace; we're your trusted partner in acquiring the car of your dreams.
                </p>
                <ul className="mt-8 space-y-6">
                    {whyChooseUsFeatures.map(feature => (
                        <li key={feature.title} className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 text-foreground">{feature.title}</h4>
                                <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
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
                className="relative h-full min-h-[400px]"
             >
                {PlaceHolderImages.find(p => p.id === 'car-3') && 
                  <Image
                      src={PlaceHolderImages.find(p => p.id === 'car-3')!.imageUrl}
                      alt="Classic car"
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                      data-ai-hint={PlaceHolderImages.find(p => p.id === 'car-3')!.imageHint}
                  />
                }
            </AnimatedDiv>
        </div>
    </section>
);


const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <AnimatedDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="relative h-16 w-16 mx-auto mb-4">
              <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonials[0].avatar.url} alt={testimonials[0].author} data-ai-hint={testimonials[0].avatar.hint} />
                  <AvatarFallback>{testimonials[0].author.substring(0,2)}</AvatarFallback>
              </Avatar>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground">
              <p>"{testimonials[0].quote}"</p>
            </blockquote>
            <footer className="mt-6">
              <div className="font-semibold text-lg">{testimonials[0].author}</div>
              <div className="text-muted-foreground">{testimonials[0].title}</div>
            </footer>
          </CardContent>
        </Card>
      </AnimatedDiv>
    </div>
  </section>
);
