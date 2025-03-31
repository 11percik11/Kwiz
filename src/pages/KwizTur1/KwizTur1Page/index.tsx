import QuizPage from "../../../features/Quiz/ui/QuizPage";
import questionsData from '../../../shared/data/tur1.json';

export default function KwizTur1Page() {
    const questions = questionsData || [];

  return (
    <>
        <QuizPage tur={1} toLink={'/kwiz/tur/1/result'} date={questions}/>    
    </>
  )
}
