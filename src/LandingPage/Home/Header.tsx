import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ChildProps {
    onToggle: () => void;
    darkMode: boolean;
}

const Header: React.FC<ChildProps> = ({ onToggle, darkMode }) => {
    return (
        <div className="flex flex-row justify-between items-center p-4">
            <strong className=""></strong>
            <strong className="text-6xl font-bold font-sans">
                Uiverse
            </strong>
            <strong className="text-3xl">
                <button onClick={onToggle} className="p-2">
                    {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                </button>
            </strong>
        </div>
    )
}

export default Header