import React, { useState } from "react";
import styleQuestion from "./Question.module.scss";

const Question = () => {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className={styleQuestion.questionBlock}>
      <div className={styleQuestion.questionView}>
        <div className={styleQuestion.aboutQuestion}>
          <h2>Ready To Get Started?</h2>
          <p>
            When pattern is mentioned in interior design, it is easy to asso-
            ciate it with a geometric patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
          <button onClick={() => setContact(!contact)}>
            {contact ? "HIDE CONTACT" : "CONTACT US"}
          </button>
          {contact ? (
            <div className={styleQuestion.contactText}>
              1234 Taliban Los Angeles, La 1234567 (123)456-7890
            </div>
          ) : null}
        </div>
        <div className={styleQuestion.questions}>
          <div className={styleQuestion.question}>
            <div className={styleQuestion.questionText}>
              <h3>What can I do to protect our planet?</h3>
              {question1 ? (
                <p>
                  Not to make an open fire in nature and to clean up litter; not
                  to pollute open water bodies; to switch to alternative energy
                  sources; to reduce the use of non-renewable resources
                </p>
              ) : null}
            </div>
            <button onClick={() => setQuestion1(!question1)}>
              {question1 ? "-" : "+"}
            </button>
          </div>
          <div className={styleQuestion.question}>
            <div className={styleQuestion.questionText}>
              <h3>How to save nature ecology?</h3>
              {question2 ? (
                <p>
                  The stakes couldn’t be higher. If we follow the path that
                  science shows us, we have the power to save nearly all habitat
                  types across the world’s lands. That’s a huge win for
                  wildlife, birds, plants, insects and the diversity of life
                  that makes our natural world such a treasure.
                </p>
              ) : null}
            </div>
            <button onClick={() => setQuestion2(!question2)}>
              {question2 ? "-" : "+"}
            </button>
          </div>
          <div className={styleQuestion.question}>
            <div className={styleQuestion.questionText}>
              <h3>What is nature conservation?</h3>
              {question3 ? (
                <p>
                  We’re analyzing satellite images and local yield potential to
                  pinpoint where soy farming and cattle ranching can expand
                  without destroying nature. This approach is especially vital
                  in Brazil’s Cerrado region, where half of all natural habitat
                  has already been converted to cropland and pasture.
                </p>
              ) : null}
            </div>
            <button onClick={() => setQuestion3(!question3)}>
              {question3 ? "-" : "+"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
