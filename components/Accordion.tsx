import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface stylesProps {
  title: string;
  value: string;
  children: any;
}

export function AccordionDemo({ title, children, value }: stylesProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={value}>
        <AccordionTrigger className="text-lg">{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
