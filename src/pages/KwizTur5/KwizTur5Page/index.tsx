import QuizOne from "../../../features/Quiz/ui/QuizOne";
import questionsData from '../../../shared/data/tur5.json';

export default function KwizTur5Page() {
    const questions = questionsData || [];

    const answersConfig = {
        maxAnswers: 18,
        answersPerRow: 6    
    };

    return (
        <>
            <QuizOne 
                tur={5} 
                toLink={'/kwiz/tur/6/title'} 
                date={questions}
                answersConfig={answersConfig}   
            />   
        </>
    )
}