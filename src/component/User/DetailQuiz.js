import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash';
import './DetailQuiz.scss';
const DetailQuiz = () => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();
    console.log('location', location);
    useEffect(() => {
        fetchQuestion();
    }, [quizId])

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        console.log('res', res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionsDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionsDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    })
                    return { questionId: key, answers, questionsDescription, image };
                })
                .value();
            console.log('data', data);
        }
    }
    console.log('params', params);
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}:  {location?.state?.quizTitle}
                </div>
                <hr></hr>
                <div className="q-body">
                    <img></img>
                </div>
                <div className="q-content">
                    <div className="question">How are you doing?</div>
                    <div className="answer">
                        <div className="a-child">A. asdadasda</div>
                        <div className="a-child">B. asdadasda</div>
                        <div className="a-child">C. asdadasda</div>

                    </div>

                </div>
                <div className="footer">

                    <button className="btn btn-secondary">Previous</button>
                    <button className="btn btn-primary">Next</button>

                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;