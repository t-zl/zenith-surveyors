import { Check } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function scrollToContact() {
  window.history.pushState(null, "", window.location.pathname);
  const target = document.querySelector("#contact");
  if (!target) return;
  const header = document.querySelector("header");
  const offset = header ? header.offsetHeight : 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

interface PricingTier {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
  features: string[];
}

interface PricingDialogProps {
  trigger?: React.ReactNode;
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
  footerNote?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "Apartment / Studio",
    price: "€450",
    popular: false,
    features: [
      "Full structural & fabric inspection",
      "Roof, walls, floors & ceilings",
      "Dampness & moisture assessment",
      "Services overview (plumbing, electrics)",
      "Written report with photos",
      "Summary of urgent defects",
    ],
  },
  {
    name: "Standard House",
    price: "€550",
    note: "Up to ~175 m²",
    popular: false,
    features: [
      "Everything in Apartment tier",
      "Attic / roof space inspection",
      "Outbuildings & boundary walls",
      "Drainage & surface water review",
      "Maintenance recommendations",
      "Priority report turnaround (48 hrs)",
    ],
  },
  {
    name: "Large / Period Property",
    price: "From €650",
    note: "175 m²+",
    popular: false,
    features: [
      "Everything in Standard tier",
      "Extended structural assessment",
      "Chimneys, flues & fireplaces",
      "Period-specific defect analysis",
      "Cost-to-remediate guidance",
      "Follow-up phone consultation",
    ],
  },
];

export function PricingDialog({
  trigger,
  title = "Pre-Purchase Structural Survey Pricing",
  subtitle = "Transparent pricing based on property type. All prices include VAT. Final quote confirmed on enquiry.",
  tiers = defaultTiers,
  footerNote = "Prices are indicative. Properties with extensions, outbuildings, or unusually complex construction may be subject to an adjusted quote. Contact us for a free, no-obligation discussion.",
}: PricingDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" size="sm" className="mt-4 w-full">
            View Pricing
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-2xl font-display font-bold">
            {title}
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-1">
            {subtitle}
          </p>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-border bg-card p-5"
            >
              {/* Header row: name + price + button */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {tier.note}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-2xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <DialogClose asChild>
                    <Button variant="outline" size="sm" onClick={scrollToContact}>
                      Get a Quote
                    </Button>
                  </DialogClose>
                </div>
              </div>

              {/* Features row */}
              <Separator className="my-4" />
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-1.5 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          {footerNote}
        </p>
      </DialogContent>
    </Dialog>
  );
}
