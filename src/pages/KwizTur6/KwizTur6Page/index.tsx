import QuizInput from '../../../features/QuizInput';
import questionsData from '../../../shared/data/tur6.json';

export default function KwizTur6Page() {
    const questions = questionsData || [];

  return (
    <>
        <QuizInput tur={6} toLink={'/kwiz/tur/7/title'} date={questions}/>   
    </>
  )
}