import ContactForm from "-/components/forms/contact-form";
import Link from "next/link";

export default function ContactField() {
  return (
    <div className="flex w-full flex-col justify-start">
      <ContactForm />

      <p className="mt-4 text-center text-sm text-muted-foreground lg:text-right">
        or contact me via{" "}
        <Link
          className="text-foreground"
          href={"mailto:mafiefa.business@gmail.com"}
        >
          e-mail
        </Link>
      </p>
    </div>
  );
}
