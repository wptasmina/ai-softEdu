import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section className="my-8 bg-[F6F6F6] lg:my-15">
            <div className="md:w-10/12 w-11-12 mx-auto py-6">
                <h4 className="text-lg font-normal text-[#001C4A] max-md:mb-3 md:text-[24px]">
                    Frequently asked
                    <br />
                    questions
                </h4>

                <h2 className="mx-auto max-w-3xl text-center text-2xl leading-relaxed font-normal text-[#262626] md:text-center md:text-5xl">
                    Cnstant collaboration is how we roll. Les&apos;s see if we are a good
                    fit.
                </h2>

                <Accordion type="single" collapsible className="mt-5 w-full md:mt-10">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="flex justify-between text-lg font-normal md:text-xl">
                            <div>
                                <span className="mr-6 font-semibold text-[#9A8C64]">01</span>
                                Why should I choose Humestic?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        At Humestic, we combine creativity with cutting-edge technology to deliver reliable, user-friendly digital solutions tailored to your needs. Our focus on quality, clear communication, and long-term client relationships sets us apart from the rest.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="flex justify-between text-lg font-normal md:text-xl">
                            <div>
                                <span className="mr-6 font-semibold text-[#9A8C64]">02</span>I
                                like your works, how do we start a project?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        Thank you! To start a project, simply reach out with your requirements, goals, and any references or ideas you have in mind. From there, we’ll discuss timelines, scope, and pricing, and then move forward with a project plan and agreement.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="flex justify-between text-lg font-normal md:text-xl">
                            <div>
                                <span className="mr-6 font-semibold text-[#9A8C64]">03</span>
                                What info is required to get a quotation?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 text-md">
                                <li><strong>Product or Service Details:</strong> What exactly are you requesting a quote for?</li>
                                <li><strong>Quantity:</strong> How many units or how much service do you need?</li>
                                <li><strong>Specifications or Requirements:</strong> Size, features, materials, customization, etc.</li>
                                <li><strong>Delivery Location:</strong> Where should it be shipped or delivered?</li>
                                <li><strong>Timeline:</strong> When do you need it (delivery or completion date)?</li>
                                <li><strong>Contact Information:</strong> Your name, email, and phone number.</li>
                            </ul>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
