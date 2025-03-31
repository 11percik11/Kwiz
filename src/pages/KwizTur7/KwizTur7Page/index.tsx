import QuizOne from "../../../features/Quiz/ui/QuizOne";
import questionsData from '../../../shared/data/tur7.json';

export default function KwizTur7Page() {
    const questions = questionsData || [];

    const answersConfig = {
      maxAnswers: 10,  
      answersPerRow: 5    
  };

  return (
    <>
        <QuizOne tur={7} answersConfig={answersConfig} toLink={'/kwiz/tur/8/title'} date={questions}/>    
    </>
  )
}