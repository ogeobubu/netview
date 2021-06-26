import {
  FAQSection,
  FAQTitle,
  Questions,
  QuestionItem,
  QuestionItemTitle,
  ReadQuestionDetail,
  QuestionItemDetail,
  ReadQuestionDesc,
  ReadQuestion,
  FAQContainer,
} from "./styles";
import Email from "../Email/Email";
import { Add, Close } from "@material-ui/icons";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is Netview?",
    answer:
      "Netview is an online service that offers reviews, ratings of a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can read movies description and check rating before you head to the cinema as much as you want, whenever you want without a single commercial – all for free. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netview cost?",
    answer:
      "View Netview on your smartphone, tablet, Smart TV, laptop, or streaming device, all for free.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    question: "How can I cancel?",
    answer:
      "Netview is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netview?",
    answer:
      "Netview has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    question: "Is Netview good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [data] = useState(faqData);
  return (
    <FAQSection>
      <FAQContainer>
        <FAQTitle>Frequently Asked Questions</FAQTitle>

        <Questions>
          <QuestionItemDetail>
            {data.map((item) => {
              const { id, question, answer } = item;

              return (
                <div style={{ marginTop: "8px", width: "100%" }} key={id}>
                  <QuestionItem
                    onClick={() =>
                      setOpen((preOpen) => (preOpen === id ? null : id))
                    }
                  >
                    <QuestionItemTitle>{question}</QuestionItemTitle>
                    {open === id ? (
                      <Close style={{ fontSize: "40px " }} />
                    ) : (
                      <Add style={{ fontSize: "40px " }} />
                    )}
                  </QuestionItem>
                  <ReadQuestion>
                    {open === id && (
                      <ReadQuestionDetail>
                        <ReadQuestionDesc>{answer}</ReadQuestionDesc>
                      </ReadQuestionDetail>
                    )}
                  </ReadQuestion>
                </div>
              );
            })}
          </QuestionItemDetail>
        </Questions>

        <Email />
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
