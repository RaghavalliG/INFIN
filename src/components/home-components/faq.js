import { Accordion } from '@mantine/core';

export default function Faq() {
    return <div className="faq-sec">
        <div className="container">
        <h2 className="secondary-title text-center">Frequently Asked Questions</h2>
        <Accordion defaultValue="customization" className='home-accordion-faq'>
      <Accordion.Item value="customization">
        <Accordion.Control>What is Incorpd?</Accordion.Control>
        <Accordion.Panel>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>How much does it cost?</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>What is LLP vs Pvt Ltd?</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring">
        <Accordion.Control>Time Frame</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  }