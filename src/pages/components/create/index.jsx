import plusIcon from '../../../assets/icons/plus-icon.png';
import Suggestion from '../suggestion';
import FilterOverlay from './FilterOverlay';

function Create({ label, extra }) {
    return (
        <div className="section add-item __shadow--sm">
            <div className="add-item__relative">
                <div className="add-item__input">
                    <img className="add-item__icon" src={plusIcon} alt="Create New Bucket" />
                    <input className="add-item__input-field" type="text" placeholder={label} />
                </div>
                {/* Filter Overlay */}
                {extra && <FilterOverlay />}
            </div>
            <div className="horizontal-line" />
            {/* Suggestions */}
            {extra && <Suggestion />}
        </div>
    );
}
export default Create;
