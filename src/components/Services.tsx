// Services Component
// Generated: 2025-08-27T23:33:31.808Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Fish,
  Utensils,
  Clock,
  Award,
  Leaf,
  Users,
  ChefHat,
  Waves
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "fresh-daily-catch",
      title: "Fresh Daily Catch",
      description: "Premium seafood delivered fresh from ocean to plate daily",
      longDescription: "Our signature service brings you the finest selection of fresh seafood, sourced directly from sustainable fisheries and delivered to our kitchen within hours of being caught. Experience the true taste of the ocean.",
      icon: Fish,
      benefits: [
        "Daily fresh deliveries from local fishermen",
        "Sustainably sourced from certified waters",
        "Expert selection by our head chef",
        "Seasonal specialties and rare catches"
      ],
      pricing: "Market price daily",
      timeline: "Available daily",
      featured: true,
      badge: "Chef's Choice"
    },
    {
      id: "fine-dining-experience",
      title: "Fine Dining Experience",
      description: "Elegant oceanfront dining with expertly crafted seafood cuisine",
      longDescription: "Immerse yourself in our sophisticated dining atmosphere where master chefs transform the finest seafood into culinary masterpieces. Each dish tells a story of ocean tradition and modern innovation.",
      icon: Utensils,
      benefits: [
        "Multi-course tasting menus",
        "Wine pairing recommendations",
        "Oceanfront seating with panoramic views",
        "Personalized service from sommelier"
      ],
      pricing: "Prix fixe from $85/person",
      timeline: "Reservations recommended"
    },
    {
      id: "private-chef-service",
      title: "Private Chef Service",
      description: "Exclusive in-home seafood dining experiences",
      longDescription: "Bring Ocean's Catch directly to your home with our private chef service. Our culinary experts will create a personalized seafood feast in the comfort of your own dining room.",
      icon: ChefHat,
      benefits: [
        "Customized menu planning",
        "Premium ingredient sourcing",
        "Professional kitchen setup",
        "Full service and cleanup included"
      ],
      pricing: "Starting at $200/person",
      timeline: "Book 48 hours in advance"
    },
    {
      id: "sustainable-sourcing",
      title: "Sustainable Ocean Program",
      description: "Committed to ocean conservation and responsible fishing",
      longDescription: "Join us in protecting our oceans while enjoying exceptional seafood. Our sustainable sourcing program ensures every dish supports responsible fishing practices and marine conservation efforts.",
      icon: Leaf,
      benefits: [
        "MSC certified sustainable seafood",
        "Partnership with local fishing communities",
        "Ocean conservation education",
        "Seasonal menu to protect breeding cycles"
      ],
      pricing: "Included in all services",
      timeline: "Year-round commitment",
      badge: "Eco-Certified"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Ocean's Catch Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Ocean to Table
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Exceptional Experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive seafood services, from fresh daily catches to exclusive dining experiences
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Availability:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Reserve Now
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Planning a Special Event?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let us create a memorable seafood experience for your celebration. Custom menus and private dining available.
          </p>
          <Button size="lg">
            Book Private Dining
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}