import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight">
          Ready to Transform Your Customer Support?
        </h2>
        <p className="mb-8 text-pretty text-lg text-muted-foreground">
          Experience the power of AI-driven customer service. Sign up today and start providing exceptional support.
        </p>
        <Button size="lg" className="text-base">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
