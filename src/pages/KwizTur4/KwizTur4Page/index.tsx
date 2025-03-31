import QuizPage from "../../../features/Quiz/ui/QuizPage";
import questionsData from '../../../shared/data/tur4.json';

export default function KwizTur4Page() {
    const questions = questionsData || [];

  return (
    <>
        <QuizPage tur={4}  toLink={'/kwiz/tur/5/title'} date={questions}/>    
    </>
  )
}