// import QuizPage from "../../../features/Quiz/ui/QuizPage";
import questionsData from '../../../shared/data/tur8.json';
import QuizSelect from "../../../features/Quiz/ui/QuizSelect";
// import Select from "../../../shared/ui/Select";


export default function KwizTur8Page() {
    const questions = questionsData || [];

  return (
    <>
        {/* <QuizPage toLink={'/kwiz/tur/8/title'} date={questions}/>     */}
        <QuizSelect tur={8} toLink={'/kwiz/tur/1'} date={questions}/>
        {/* <Select valueLength={4} valueCorrect={2} /> */}
    </>
  )
}