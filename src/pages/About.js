import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const chevron = <FontAwesomeIcon icon={faChevronDown} />

export default function About() {

    const [accordionOpen, setaccordionOpen] = useState(false);

    const firstClick = () => {
        setaccordionOpen(true)
    }
    const secondClick = () => {
        setaccordionOpen(false)
    }

    return (
        <div className="col-sm-12 accordion" onClick={(accordionOpen !== true) ? firstClick : secondClick}>
            <h1>
                About us  {chevron}
            </h1>
            <div className={(accordionOpen !== true) ? 'd-none' : 'd-block'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut vestibulum quam. Aenean id erat mattis, imperdiet ligula sit amet, elementum risus. Donec tincidunt commodo massa sit amet blandit. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Morbi posuere, quam sed hendrerit accumsan, risus metus rhoncus purus, eu viverra turpis lacus quis purus. Nullam at aliquam est. Curabitur non tortor vel neque maximus mattis. Morbi id ipsum et dui convallis ultricies. Sed bibendum porta rutrum. Quisque metus nunc, tempor sed blandit a, porttitor ut lacus. Duis posuere finibus facilisis. Duis consectetur, tellus et venenatis mattis, dolor erat viverra neque, ac rutrum sem ex ut justo. Fusce vel nisi nulla. Cras lacus enim, aliquam in rutrum at, consequat sed mauris.</p>
            </div>
        </div>
    )
}
