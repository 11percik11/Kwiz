import QuizPage from "../../../features/Quiz/ui/QuizPage";
import questionsData from '../../../shared/data/tur3.json';

export default function KwizTur3Page() {
    const questions = questionsData || [];

  return (
    <>
        <QuizPage tur={3} toLink={'/kwiz/tur/4/title'} date={questions}/>    
    </>
  )
}