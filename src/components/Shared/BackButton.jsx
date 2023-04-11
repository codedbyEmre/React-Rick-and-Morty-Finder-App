import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="button is-link mt-5">
      <span className="icon is-small">
        <i className="fas fa-arrow-left"></i>
      </span>
      <span>Back</span>
    </button>
  );
};

export default BackButton;
