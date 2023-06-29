import React from "react";

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrev = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return(
        <nav className="my-5">
            <ul className="pagination justify-content-center ">
                {prev ? (
                    <li className="page-item">
                        <button className="page-link text-reset" onClick={handlePrev}>Prev</button>
                    </li>
                    ): null}

                {next ? (
                    <li className="page-item">
                        <button className="page-link text-reset" onClick={handleNext}>Next</button>
                    </li>
                    ) : null}
            </ul>
        </nav>
    );
}

export default Pagination;