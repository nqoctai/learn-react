import _ from 'lodash';
const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    return (
        <>
            <div className='q-image'>
                <img src={`data:image/jpeg;base64,${data.image}`}></img>
            </div>
            <div className="question">Question {index + 1}: {data.questionsDescription}</div>
            <div className="answer">
                {data.answers && data.answers.length > 0 && data.answers.map((answer, index) => {
                    return (
                        <div key={`answer-${index}`} className="a-child">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />
                                <label class="form-check-label">
                                    {answer.description}
                                </label>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
export default Question;