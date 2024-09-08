import _ from 'lodash';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useState } from "react";
const Question = (props) => {
    const { data, index } = props;
    const [isPreviewImage, setIsPreviewImage] = useState(false);
    if (_.isEmpty(data)) {
        return (<></>)
    }


    const handleHandleCheckBox = (event, aId, qId) => {
        props.handleCheckBox(aId, qId)
    }
    return (
        <>
            {data.image ?
                <div className='q-image'>
                    <img onClick={() => setIsPreviewImage(true)} src={`data:image/jpeg;base64,${data.image}`}></img>
                    {isPreviewImage === true &&
                        <Lightbox
                            image={`data:image/jpeg;base64,${data.image}`}
                            title={"Question Image"}
                            onClose={() => setIsPreviewImage(false)}>
                        </Lightbox>}
                </div> :
                <div className='q-image'>

                </div>
            }


            <div className="question">Question {index + 1}: {data.questionsDescription}</div>
            <div className="answer">
                {data.answers && data.answers.length > 0 && data.answers.map((answer, index) => {
                    return (
                        <div key={`answer-${index}`} className="a-child">
                            <div className="form-check">
                                <input className="form-check-input" checked={answer.isSelected} type="checkbox" onChange={(event) => handleHandleCheckBox(event, answer.id, data.questionId)} />
                                <label className="form-check-label">
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