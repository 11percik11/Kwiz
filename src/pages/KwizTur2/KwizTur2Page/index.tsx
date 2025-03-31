import QuizPage from "../../../features/Quiz/ui/QuizPage";
import questionsData from '../../../shared/data/tur2.json';

export default function KwizTur2Page() {
    const questions = questionsData || [];

  return (
    <>
        <QuizPage tur={2}  toLink={'/kwiz/tur/2/result'} date={questions}/>    
    </>
  )
}
