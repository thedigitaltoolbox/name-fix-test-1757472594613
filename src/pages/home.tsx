/* Generated from SiteSpec */
import SimpleSideBySideOnBrand from "@/sections/SimpleSideBySideOnBrand";
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import WithTestimonial from "@/sections/WithTestimonial";
import Centered from "@/sections/Centered";

export default function home(){
  return (<main>
    <SimpleSideBySideOnBrand {...{
  headline: "Transform Your Name Today!",
  subhead: "Discover how Name Fix Test can enhance your brand identity.",
  imageUrl: "https://example.com/image.jpg",
  primaryCta: {
    text: "Get Started",
    href: "/get-started"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/services"
  }
}} />
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Flexible pricing to fit your needs.",
  showToggle: true,
  tiers: [
    {
      name: "Basic",
      id: "basic-plan",
      href: "/pricing/basic",
      price: {
        monthly: "$10",
        annually: "$100"
      },
      description: "Perfect for individuals just getting started.",
      features: [
        "Access to basic features",
        "Email support",
        "Community access"
      ],
      mostPopular: false
    },
    {
      name: "Pro",
      id: "pro-plan",
      href: "/pricing/pro",
      price: {
        monthly: "$20",
        annually: "$200"
      },
      description: "Ideal for small teams looking to grow.",
      features: [
        "All Basic features",
        "Priority support",
        "Advanced analytics"
      ],
      mostPopular: true
    },
    {
      name: "Enterprise",
      id: "enterprise-plan",
      href: "/pricing/enterprise",
      price: {
        monthly: "$50",
        annually: "$500"
      },
      description: "Comprehensive solutions for large organizations.",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom integrations"
      ],
      mostPopular: false
    }
  ]
}} />
    <OffsetWithFeatureList {...{
  title: "Key Features of Name Fix Test",
  subtitle: "Discover what sets us apart",
  items: [
    {
      title: "User-Friendly Interface",
      body: "Navigate our platform effortlessly with an intuitive design.",
      icon: "🖥️"
    },
    {
      title: "Affordable Pricing Plans",
      body: "Choose from flexible pricing options tailored to your needs.",
      icon: "💰"
    },
    {
      title: "24/7 Customer Support",
      body: "Our dedicated team is here to assist you anytime, day or night.",
      icon: "📞"
    },
    {
      title: "Secure and Reliable",
      body: "Your data is safe with us, ensuring peace of mind.",
      icon: "🔒"
    },
    {
      title: "Regular Updates",
      body: "Stay ahead with continuous improvements and new features.",
      icon: "🔄"
    }
  ]
}} />
    <WithTestimonial {...{
  headline: "What Our Clients Say",
  subhead: "Real feedback from satisfied customers.",
  imageUrl: "https://example.com/testimonial-image.jpg",
  primaryCta: {
    text: "Read More Testimonials",
    href: "/testimonials"
  },
  secondaryCta: {
    text: "Share Your Experience",
    href: "/share-testimonial"
  }
}} />
    <Centered {...{
  headline: "Get Started with Name Fix Test Today!",
  subhead: "Transform your name and enhance your brand identity effortlessly.",
  imageUrl: "https://example.com/image.jpg",
  primaryCta: {
    text: "Start Now",
    href: "/get-started"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/about"
  }
}} />
  </main>);
}
