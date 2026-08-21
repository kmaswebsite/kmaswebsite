import { toneFor } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items, id = "accordionFaq" }: { items: AccordionItem[]; id?: string }) {
  return (
    <div className="accordion accordion-custom" id={id}>
      {items.map((item, index) => {
        const itemId = `${id}-item-${index}`;
        const tone = toneFor(index);
        return (
          <div className={`accordion-item tone-${tone}`} key={itemId}>
            <h2 className="accordion-header d-flex align-items-stretch">
              <span className="accordion-index">{String(index + 1).padStart(2, "0")}</span>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${itemId}-collapse`}
                aria-expanded={index === 0}
                aria-controls={`${itemId}-collapse`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`${itemId}-collapse`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent={`#${id}`}
            >
              <div className="accordion-body text-light-custom">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
