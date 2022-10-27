import './style.css'

const Display = ({ red, amber, green, onClick }) => (
    <div className="black-box">
        <button onClick={onClick}>Next</button>
        <div className={`light ${red ? "red" : "inactive"}`} />
        <div className={`light ${amber ? "amber" : "inactive"}`} />
        <div className={`light ${green ? "green" : "inactive"}`} />
    </div>
  );

export default Display