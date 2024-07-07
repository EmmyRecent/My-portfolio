import InputArea from "../components/InputArea";
import { contact } from "../constants";

const Contact = () => {
  return (
    <section id="#contact">
      <div className="wrapper">
        <div className="flex flex-col gap-16 md:flex-row-reverse md:items-center md:gap-5">
          {/* Content */}
          <div className="contact_form flex-1 space-y-7 md:space-y-10 lg:pl-20 xl:pl-40">
            {contact.map((i, index) => (
              <div key={index} className="contact_item flex items-start gap-4">
                <div className="grid h-10 w-10 place-content-center rounded-full bg-gradient-to-b from-primaryColor to-primaryColorLight text-whiteColor lg:h-14 lg:w-14">
                  <i className={i.iconClass}></i>
                </div>

                <div className="space-y-1">
                  <p className="text-sm">{i.label}</p>
                  <a
                    href={`${i.label === "Phone" ? "tel" : "mailto"}:${i.medium}`}
                    className="cursor-pointer font-bold duration-300 hover:text-primaryColorLight"
                  >
                    {i.medium}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form
            action="#"
            name="submit-to-google-sheet"
            className="flex-1 space-y-3 rounded-xl border border-primaryColor bg-sectionColor px-5 py-10 dark:bg-darkSectionColor"
          >
            {/* Subtitle and description */}
            <div className="flex flex-col">
              <h2 className="subtitle capitalize">Lets Work together!</h2>
              <p className="max-w-2xl py-3">
                I create elegantly simple designs and code with passion. It`s as
                straightforward as that!
              </p>
            </div>

            {/* Input area */}
            <InputArea />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
