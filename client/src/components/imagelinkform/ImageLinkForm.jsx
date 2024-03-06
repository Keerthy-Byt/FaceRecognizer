import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3 tc white">
        {"This Analyzer will detect faces in your pictures. Give it a try."}
      </p>
      <div className="flex justify-center center">
        <div className="form pa4 br3 shadow-5 center w-40">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib dib white bg-navy"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
