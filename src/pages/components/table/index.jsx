import deleteIcon from '../../../assets/icons/delete-icon.png';
import downArrowWhiteIcon from '../../../assets/icons/down-arrow-white-icon.png';
import printerWhiteIcon from '../../../assets/icons/printer-white-icon2.png';

function Table() {
    return (
        <table className="table__table">
            <thead className="table__thead">
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th className="align-right">
                        <button className="icon-button">
                            <img className="icon-button__icon" src={printerWhiteIcon} alt="Print" />
                        </button>
                        <button className="icon-button">
                            <img
                                className="icon-button__icon"
                                src={downArrowWhiteIcon}
                                alt="Print"
                            />
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody className="table__tbody">
                <tr>
                    <th>
                        <div className="table__item-name">
                            <input type="checkbox" />
                            <label>Carrots</label>
                        </div>
                    </th>
                    <th>
                        <div className="table__item-input">
                            <span
                                className="auto-grow-input"
                                role="textbox"
                                aria-placeholder="500G"
                                contentEditable
                            >
                                2KG
                            </span>
                        </div>
                    </th>
                    <th>
                        <div className="table__item-input">
                            <span className="auto-grow-input" role="textbox" contentEditable>
                                250
                            </span>
                            <span>BDT</span>
                        </div>
                    </th>
                    <th className="align-right">
                        <button className="icon-button">
                            <img className="icon-button__icon" src={deleteIcon} alt="Delete" />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="table__item-name">
                            <input type="checkbox" />
                            <label>Carrots</label>
                        </div>
                    </th>
                    <th>
                        <div className="table__item-input">
                            <span
                                className="auto-grow-input"
                                role="textbox"
                                aria-placeholder="500G"
                                contentEditable
                            >
                                2KG
                            </span>
                        </div>
                    </th>
                    <th>
                        <div className="table__item-input">
                            <span className="auto-grow-input" role="textbox" contentEditable>
                                250
                            </span>
                            <span>BDT</span>
                        </div>
                    </th>
                    <th className="align-right">
                        <button className="icon-button">
                            <img className="icon-button__icon" src={deleteIcon} alt="Delete" />
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="table__item-name">
                            <input type="checkbox" />
                            <label>Carrots</label>
                        </div>
                    </th>
                    <th>
                        <div className="table__item-input">
                            <span
                                className="auto-grow-input"
                                role="textbox"
                                aria-placeholder="500G"
                                contentEditable
                            >
                                2KG
                            </span>
                        </div>
                    </th>
                    <th>
                        <div className="table__item-input">
                            <span className="auto-grow-input" role="textbox" contentEditable>
                                250
                            </span>
                            <span>BDT</span>
                        </div>
                    </th>
                    <th className="align-right">
                        <button className="icon-button">
                            <img className="icon-button__icon" src={deleteIcon} alt="Delete" />
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    );
}
export default Table;
