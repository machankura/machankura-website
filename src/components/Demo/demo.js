import "./ussd.js";

import "./demo.css";

const Demo = () => {
    return (
        <>
        <div className="phoneFrame app" data-status="options">
            <div className="phone-displayFrame">
            <div className="phone-display">
                <div className="phone-overlay">...</div>
                <div className="phone-content">
                </div>
                <div className="phone-actionsPad">
                <div data-action="back">Back</div>

                <div data-action="quit">Cancel</div>
                <div data-action="answer">Reply</div>

                <div data-action="clear">Clear</div>
                <div data-action="send">Send</div>

                <div data-action="names">Names</div>
                <div data-action="menu">Menu</div>
                </div>
            </div>
            </div>
            <div className="phone-btnSet phone-navPad">
            <div className="phone-keyboardCol">
                <div className="phone-btn confirm" data-action="ok">—</div>
                <div className="phone-btn">call</div>
            </div>
            <div className="phone-keyboardCol">
                <div className="phone-btn up" data-action="up">⌃</div>
                <div className="phone-btn down" data-action="down">⌄</div>
            </div>
            <div className="phone-keyboardCol">
                <div className="phone-btn cancel" data-action="cancel">—</div>
                <div className="phone-btn" data-action="end">end</div>
            </div>
            </div>
            <div className="phone-btnSet phone-numPad">
            <div className="phone-keyboardCol">
                <div className="phone-btn" data-action="1">1</div>
                <div className="phone-btn" data-action="4">4</div>
                <div className="phone-btn" data-action="7">7</div>
                <div className="phone-btn" data-action="*">*</div>
            </div>
            <div className="phone-keyboardCol">
                <div className="phone-btn" data-action="2">2</div>
                <div className="phone-btn" data-action="5">5</div>
                <div className="phone-btn" data-action="8">8</div>
                <div className="phone-btn" data-action="0">0</div>
            </div>
            <div className="phone-keyboardCol">
                <div className="phone-btn" data-action="3">3</div>
                <div className="phone-btn" data-action="6">6</div>
                <div className="phone-btn" data-action="9">9</div>
                <div className="phone-btn" data-action="#">#</div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Demo;