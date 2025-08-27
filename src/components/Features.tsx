// Features Component
// Generated: 2025-08-27T23:33:31.808Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Fish, 
  Leaf, 
  Clock, 
  Award, 
  ChefHat, 
  Waves,
  Thermometer,
  Users,
  MapPin
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Fish,
      title: "Premium Seafood",
      description: "Hand-selected premium fish and shellfish from trusted sustainable fisheries worldwide.",
      badge: "Quality"
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "Committed to ocean conservation with certified sustainable fishing practices.",
      badge: "Eco-Friendly"
    },
    {
      icon: Clock,
      title: "Daily Fresh Delivery",
      description: "Fresh catch delivered daily ensuring peak flavor and quality in every dish.",
      badge: "Freshness"
    },
    {
      icon: Award,
      title: "Award-Winning Cuisine",
      description: "Recognized by culinary experts for exceptional seafood preparation and presentation.",
      badge: "Excellence"
    },
    {
      icon: ChefHat,
      title: "Master Chefs",
      description: "Expert culinary team with decades of experience in gourmet seafood preparation.",
      badge: "Expertise"
    },
    {
      icon: Waves,
      title: "Ocean-to-Table",
      description: "Direct partnerships with fishermen ensure the shortest journey from ocean to your plate.",
      badge: "Direct Source"
    },
    {
      icon: Thermometer,
      title: "Perfect Temperature",
      description: "Advanced cold-chain management maintains optimal freshness throughout delivery.",
      badge: "Preservation"
    },
    {
      icon: Users,
      title: "Private Dining",
      description: "Exclusive dining experiences for special occasions and corporate events.",
      badge: "Experience"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Waterfront dining with stunning ocean views and elegant coastal atmosphere.",
      badge: "Ambiance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Ocean's Catch Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Seafood Lovers Choose
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ocean's Catch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From sustainable sourcing to expert preparation, discover what makes our 
            gourmet seafood restaurant the premier destination for ocean cuisine.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to taste the Ocean's Catch difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Make Reservation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}